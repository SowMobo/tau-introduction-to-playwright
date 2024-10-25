import {test, expect, type Page} from '@playwright/test';
import {HomePage} from '../pages/home-page';
import { TopMenuPage } from '../pages/top-menu-page';

// AAA Pattern
// POM
// test variables
const URL = 'https://playwright.dev/';
const homePageTitle = /Playwright/;
const topMenuPageUrl = /.*intro/;

// page variables
let homePage: HomePage;
let topMenuPage: TopMenuPage;

// set up a test
test.beforeEach(async ({page}) => {
    await page.goto(URL);
    homePage = new HomePage(page);
});

// test suite
test.describe('test Playwright website', () => {
    // tests

    test('has title', async () =>{
        await homePage.assertPageTitle(homePageTitle);
    });

    test('Open Get Started page', async () => {
        topMenuPage = await homePage.clickGetStarted();
        await topMenuPage.assertPageUrl(topMenuPageUrl);
    });

    test('Check Java page', async () => {
        await test.step('Act', async () =>{
            topMenuPage = await homePage.clickGetStarted();
            await topMenuPage.hoverNode();
            await topMenuPage.clickJava();
        });

        await test.step('Assert', async () => {
            await topMenuPage.assertPageUrl(topMenuPageUrl);
            await topMenuPage.assertNodeDescriptionNotVisible();
            await topMenuPage.assertJavaDescriptionBeVisible();
        })
    })

})