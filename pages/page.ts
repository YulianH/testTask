import { Page, Browser } from "@playwright/test"
import { LoginPage } from "./loginPage"
import { ActionManager } from "./actionManager"
import { ArticlePage } from "./articlePage"

export class Pages {
    page: Page
    loginPage: LoginPage
    action: ActionManager
    articlePage: ArticlePage

    constructor() {
        this.loginPage = new LoginPage(this)
        this.action = new ActionManager(this.page, this)
        this.articlePage = new ArticlePage(this)
    }

    async createPage(browser: Browser) {
        this.page = await browser.newPage()
        this.loginPage = new LoginPage(this)
        this.action = new ActionManager(this.page, this)
    }
}
