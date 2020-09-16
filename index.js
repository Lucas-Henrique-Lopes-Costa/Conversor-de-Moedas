const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync')

console.log('Converter Moedas:');

async function robo() {
  
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const moedaBase = readlineSync.question('Infome a moeda base: ') || 'dolar';
    const moedaFinal = readlineSync.question('Infome a moeda desejada: ') || 'real';

    const qualquerurl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome.0.0j69i57j0l6.2238j1j7&sourceid=chrome&ie=UTF-8`;
    await page.goto(qualquerurl);

    const resultado = await page.evaluate(() => {
        return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
      });

    console.log(`O valor do ${moedaBase} em ${moedaFinal} é ${resultado}`)

    // await browser.close();
};

robo();