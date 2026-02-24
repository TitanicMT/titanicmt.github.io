const Jimp = require('jimp');

async function cropImage(filename) {
  try {
    const image = await Jimp.read(filename);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // Crop 50px from all sides
    // Based on the user's screenshot, the blue is a border/shadow that we just need to crop deeply
    const cropAmount = 50;
    
    if (width > cropAmount * 2 && height > cropAmount * 2) {
      image.crop(cropAmount, cropAmount, width - cropAmount * 2, height - cropAmount * 2);
      await image.writeAsync(filename);
      console.log(`Successfully cropped ${filename}`);
    } else {
        console.log(`Image ${filename} is too small to crop ${cropAmount}px`);
    }
  } catch (error) {
    console.error(`Error processing ${filename}:`, error);
  }
}

async function run() {
    await cropImage('images/mtdex_home_1771892037778.png');
    await cropImage('images/mtdex_details_1771892057908.png');
    await cropImage('images/mtdex_items_1771892103885.png');
    await cropImage('images/mtdex_moves_1771892141696.png');
}

run();
