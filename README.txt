[+] Installation [+] 
[-] npm install puppeteer

[+] Devices options [+]
[-] Right now I have it set to Ipad landscape. You can change this to any type you would like.

[+] What device to use? [+]
[-] We can run tests with mobile configurations in Puppeteer and check the responsive property of a webpage
[-] The list of devices that the Puppeteer supports can be obtained from the Chrome DevTools. 
[-] Right-click on a page opened in the Chrome browser, then select Inspect.
[-] Then, click on the Toggle Device Toolbar.
[-] Click on the dropdown - Responsive to get the list of devices.
[-] To emulate a device, we have to use the method emulate() and the device to be emulated is passed as a parameter to this method

[+ Example [+] 
const phone = puppeteer.devices['iPhone X']
//emulate the iPhoneX
await page.emulate(phone)

Enjoy :) 
