import puppeteer = require('puppeteer');
import {pageUrls} from './resources/pageUrls';
import shuffle = require('lodash.shuffle');
import {getName} from "./resources/names";
import {generateEmailFromName} from "./email-gen";
import {getPhoneNumber} from "./resources/phone-numbers";
import {generatePasswordFromName} from "./password-gen";

(async () => {
    // Select a page to go to
    const shuffledUrls = shuffle(pageUrls);
    const targetUrl =  shuffledUrls[0];

    if (targetUrl == undefined) {
        throw "Pages list is empty."
    }

    // Create the browser page
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to the target page
    await page.goto(targetUrl, {
        waitUntil: 'networkidle2',
    });

    // Interact

    // Nav to signup page
    await page.click('#content > div > div.jobDisplayShell > div > div.content > div.jobTitle > div > div > button');
    await Promise.all([
        page.click('#applyOption-top-manual'), // navigates to new page
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    await Promise.all([
        page.click('#page_content > div:nth-child(7) > div > div > div.round.sfpanel > div > div > div:nth-child(12) > a'), // navigates to new page
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    // Signup
    const name = getName();
    const email = generateEmailFromName(name);
    const password = generatePasswordFromName(name);
    const phoneNumber = getPhoneNumber();

    await page.type('#fbclc_userName', email); // email
    await page.type('#fbclc_emailConf', email); // retype email
    await page.type('#fbclc_pwd', password); // password
    await page.type('#fbclc_pwdConf', password); // retype password
    await page.type('#fbclc_fName', name.split(' ')[0]); // first name
    await page.type('#fbclc_lName', name.split(' ')[1]); // last name
    await page.select('#fbclc_ituCode', 'US') // region code
    await page.type('#fbclc_phoneNumber', phoneNumber); // phone number
    await page.select('#fbclc_country', 'US') // region of residence
    await page.click('#fbclc_emailEnabled') // email spam checkbox 1
    await page.click('#fbclc_campaignEmailEnabled') // email spam checkbox 2
    await page.click('#dataPrivacyId') // open t&c popup
        .then(() => page.waitForTimeout(1750)) // wait for popup to open
    await page.click('#dlgButton_20\\:') // accept t&c popup

    await Promise.all([
        page.click('#fbclc_createAccountButton'), // navigates to new page
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);

    //
    // await browser.close();
})();