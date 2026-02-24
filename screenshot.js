const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:5173/');
  
  await page.evaluate(() => {
    document.body.style.background = 'white';
    document.documentElement.style.background = 'white';
    const appContainer = document.querySelector('#root > div');
    if (appContainer) {
       appContainer.style.background = 'white';
    }
  });

  await page.waitForSelector('.grid'); 
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: '/Users/mt/Documents/Vibe Code Projects/TitanicMT.github.io/images/mtdex_home_1771892037778.png' });
  
  await page.click('.grid > div:first-child');
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(() => {
    document.body.style.background = 'white';
  });
  await page.screenshot({ path: '/Users/mt/Documents/Vibe Code Projects/TitanicMT.github.io/images/mtdex_details_1771892057908.png' });
  

  await page.evaluate(() => {
      const closeBtns = document.querySelectorAll('button');
      for (let btn of closeBtns) {
          if (btn.querySelector('svg') || btn.innerHTML.includes('Close') || btn.classList.contains('absolute')) {
              btn.click();
              break;
          }
      }
  });
  await new Promise(r => setTimeout(r, 500));
  
  await page.goto('http://localhost:5173/items');
  await page.waitForSelector('.grid');
  await new Promise(r => setTimeout(r, 2000));
  await page.evaluate(() => {
    document.body.style.background = 'white';
    const appContainer = document.querySelector('#root > div');
    if (appContainer) appContainer.style.background = 'white';
  });
  await page.screenshot({ path: '/Users/mt/Documents/Vibe Code Projects/TitanicMT.github.io/images/mtdex_items_1771892103885.png' });
  
  await page.goto('http://localhost:5173/moves');
  await page.waitForSelector('.grid');
  await new Promise(r => setTimeout(r, 2000));
  await page.evaluate(() => {
    document.body.style.background = 'white';
    const appContainer = document.querySelector('#root > div');
    if (appContainer) appContainer.style.background = 'white';
  });
  await page.screenshot({ path: '/Users/mt/Documents/Vibe Code Projects/TitanicMT.github.io/images/mtdex_moves_1771892141696.png' });

  await browser.close();
  console.log('Screenshots captured successfully.');
})();
