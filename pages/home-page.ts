import {expect, type Locator, type Page} from '@playwright/test';
import { TopMenuPage } from './top-menu-page';

export class HomePage{
    // varaibles
    readonly page:Page;
    readonly  getStartedButton: Locator;


    // constructor
    constructor (page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('link', {name: 'Get started'});
    }

    // methods
    async clickGetStarted() {
        await this.getStartedButton.click();
        return new TopMenuPage(this.page);
    }

    async assertPageTitle(title: RegExp){
        await expect(this.page).toHaveTitle(title);
    }

}

export default HomePage; 
