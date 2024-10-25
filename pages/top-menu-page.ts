import { expect, Expect, type Locator, type Page } from "@playwright/test";

export class TopMenuPage{
    // variables
    readonly page:Page;
    readonly javaLink:Locator;
    readonly nodeLink:Locator;
    readonly javaLabel:Locator;
    readonly nodeLabel:Locator;
    readonly nodeDescription: string = 'Installing Playwright';
    readonly javaDescription:string = "Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.";

    // constructor
    constructor(page: Page) {
        this.page = page
        this.nodeLink = this.page.getByRole('button', {name: 'Node.js'});
        //this.javaLink = this.page.getByRole('link', { name: 'Java', exact: true });
        this.javaLink = this.page.locator('.dropdown__menu a', {hasText: 'Java'})
        //this.javaLink = this.page.getByRole('navigation', { name: 'Main' }).getByText('Java');
        this.nodeLabel = this.page.getByText(this.nodeDescription, {exact:true});
        this.javaLabel = this.page.getByText(this.javaDescription);
    }

    // methods
    async assertPageUrl(pageUrl:RegExp){
        await expect(this.page).toHaveURL(pageUrl);
    }

    async hoverNode() {
        await this.nodeLink.hover();
    }

    async clickJava() {
        await this.javaLink.click();
    }
    
    async assertNodeDescriptionNotVisible() {
        await expect(this.nodeLabel).not.toBeVisible();
    }

    async assertJavaDescriptionBeVisible() {
        await expect(this.javaLabel).toBeVisible();
    }
}
export default TopMenuPage;