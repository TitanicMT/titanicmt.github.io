from PIL import Image
import os

def crop_top_black_bar(image_path):
    print(f"Processing {image_path}...")
    try:
        img = Image.open(image_path)
        img = img.convert('RGB')
        width, height = img.size
        
        # Find the first row that is NOT entirely black
        # We consider a pixel "black" if its RGB values are all very low (e.g. < 10)
        crop_top = 0
        for y in range(height):
            is_black_row = True
            for x in range(0, width, 10): # Check every 10th pixel for speed
                r, g, b = img.getpixel((x, y))
                if r > 15 or g > 15 or b > 15:
                    is_black_row = False
                    break
            if is_black_row:
                crop_top += 1
            else:
                break
                
        print(f"Detected top black bar height: {crop_top}px")
        
        if crop_top > 0 and crop_top < height / 2: # Sanity check
            # We want to crop 'crop_top' pixels from the top. 
            cropped_img = img.crop((0, crop_top, width, height))
            cropped_img.save(image_path)
            print(f"Successfully cropped {image_path}")
        else:
            print(f"No valid black bar detected (found {crop_top}px). Skipping.")
            
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

images = [
    'images/mtdex_home_1771892037778.png', 
    'images/mtdex_details_1771892057908.png',
    'images/mtdex_items_1771892103885.png',
    'images/mtdex_moves_1771892141696.png'
]

for img in images:
    crop_top_black_bar(img)

