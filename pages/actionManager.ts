import { expect, Page } from "@playwright/test"
import { Pages } from "./page"

export class ActionManager {
    page: Page

    constructor(page: Page, private pages: Pages) {
        this.page = page
    }

    async openPage(uri: string) {
        await this.page.goto(uri)
    }

    async inputValue(selector: string, value: string | number) {
        await this.page.locator(selector).fill(`${value}`)
    }

    async clickButton(selector: string) {
        await this.page.locator(selector).click()
    }

    async isElementDisplayed(selector: string, shouldBeDisplayed: boolean) {
        const element = this.page.locator(selector)
        shouldBeDisplayed 
            ? await expect(element).toBeVisible() 
            : await expect(element).not.toBeVisible()
    }

    async isTextDisplayed(text: string) {
        await expect(this.page.getByText(text)).toBeVisible()
    }
}
