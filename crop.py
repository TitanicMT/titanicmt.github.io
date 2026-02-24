import sys
from PIL import Image

def crop_blue_glow(filepath):
    img = Image.open(filepath)
    # The blue glow from the agent is exactly 24px or so, let's crop 40px to be safe and remove rounded corners, 
    # but to be more exact, let's just crop 24px from each side, or let's use a heuristic: crop until we don't see blue.
    # Actually, the agent's blue frame is applied as a CSS border or outline on the body/html.
    # We can just crop out 50 pixels from all sides. Let's inspect the edges first.
    
    width, height = img.size
    
    pixels = img.load()
    
    # find top edge
    top = 0
    for y in range(height//2):
        if pixels[width//2, y][:3] != (114, 153, 222) and pixels[width//2, y][:3] != (218, 225, 237) and abs(pixels[width//2, y][0]-pixels[width//2, y][2]) < 50:
            # Not bluish
            top = y
            break
            
    # let's just do a simple crop of 32 pixels from all sides which usually covers the 24px blue border and some anti-aliasing.
    
    crop_amount_x = 32
    crop_amount_y = 32
    
    # Better: find the actual white/content box
    # We look for the first pixel from each side that is close to white (background of pokedex) or not blue.
    def is_blue_glow(p):
        r, g, b = p[:3]
        # blue glow is typically a light blue #4facfe to #00f2fe or similar, or #2563eb
        # Let's just say it's blue if b > r + 20 and b > g
        return b > r + 10 and b > g - 10

    left = 0
    while left < width // 2 and is_blue_glow(pixels[left, height//2]): left += 1
    
    right = width - 1
    while right > width // 2 and is_blue_glow(pixels[right, height//2]): right -= 1
    
    top = 0
    while top < height // 2 and is_blue_glow(pixels[width//2, top]): top += 1
        
    bottom = height - 1
    while bottom > height // 2 and is_blue_glow(pixels[width//2, bottom]): bottom -= 1

    # Add a little extra crop (2px) to remove anti-aliasing artifacts
    left += 2; top += 2; right -= 2; bottom -= 2
    
    # If the logic failed, fallback to 32px
    if left == 2 or left > 100: left = 32
    if top == 2 or top > 100: top = 32
    if right == width - 3 or right < width - 100: right = width - 32
    if bottom == height - 3 or bottom < height - 100: bottom = height - 32
    
    # Print what we're doing
    print(f"Cropping {filepath}: top={top}, bottom={bottom}, left={left}, right={right}")

    cropped = img.crop((left, top, right + 1, bottom + 1))
    cropped.save(filepath.replace('.png', '_cropped.png'))

for img_name in ['mtdex_home_1771892037778.png']:
    crop_blue_glow(f'images/{img_name}')

