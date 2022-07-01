const puppeteer = require('puppeteer')


function sleep(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}


puppeteer.launch({headless:false}).then(async browser => {
    username = ""
    password = ""
   const page = await browser.newPage()
   //set device to iPhone X
   const m = puppeteer.devices['iPad landscape'] // Iphone X, Iphone 13 for different emulator devices
   //emulate iPhoneX
   await page.emulate(m)
   await page.goto('https://www.tiktok.com/login/phone-or-email/email', { waitUntil: 'networkidle2' })
   await page.type('#root > div > div.tiktok-web-body-33PDi > form > div.form-container-3hjAo > div > input[type=text]', username);
   await page.type('#root > div > div.tiktok-web-body-33PDi > form > div.form-container-3WLeZ > div > input[type=password]', password)
   await page.click('#root > div > div.tiktok-web-body-33PDi > form > button')
   // Captcha Will be displayed after it clicks on the submit selecotor.
})
