const Apify = require('apify');

Apify.main(async () => {
    const input = await Apify.getValue('INPUT');
    console.log('My input is:');
    console.dir(input);
    const { url } = input;

    console.log('Launching Puppeteer...');
    const browser = await Apify.launchPuppeteer();
    const page = await browser.newPage();
    await page.goto(url);
    const pageTitle = await page.title();
    await browser.close();

    const output = { pageTitle, url };
    console.log('My output is:');
    console.dir(output);
    await Apify.setValue('OUTPUT', output);
});