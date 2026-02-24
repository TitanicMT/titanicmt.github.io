const fs = require('fs');
const PNG = require('pngjs').PNG;

const filename = 'mtdex_home_1771892037778.png';

fs.createReadStream(filename)
  .pipe(new PNG())
  .on('parsed', function() {
    let blackRows = 0;
    for (let y = 0; y < this.height; y++) {
      let isBlackRow = true;
      for (let x = 0; x < this.width; x++) {
        let idx = (this.width * y + x) << 2;
        let r = this.data[idx];
        let g = this.data[idx+1];
        let b = this.data[idx+2];
        if (r > 10 || g > 10 || b > 10) { // Not entirely black
          isBlackRow = false;
          break;
        }
      }
      if (isBlackRow) {
        blackRows++;
      } else {
        break;
      }
    }
    console.log(`black_rows=${blackRows}`);
  });
