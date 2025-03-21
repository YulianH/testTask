import { expect, Page } from "@playwright/test"
import { Pages } from "./page"
import { locators } from "./locators"

export class ArticlePage {
    page: Page

   constructor(private pages: Pages) {}

    async inputTitle(title: string) {
        await this.pages.action.inputValue(locators.articlePage.articleTitleInput, title)
    }

    async inputAbout(about: string) {
        await this.pages.action.inputValue(locators.articlePage.aboutInput, about)
    }

    async inputText(text: string) {
        await this.pages.action.inputValue(locators.articlePage.articleTextInput, text)
    }

    async inputTag(tag: string) {
        await this.pages.action.inputValue(locators.articlePage.tagInput, tag)
    }

    async clickPublishBtn() {
        await this.pages.action.clickButton(locators.articlePage.publishArticleBtn)
    }

    async createNewArticle(title: string, about: string, text: string, tag: string) {
        await this.inputTitle(title)
        await this.inputAbout(about)
        await this.inputText(text)
        await this.inputTag(tag)
        await this.clickPublishBtn()
        await this.clickPublishBtn()
        await this.isArticleCreated(title)
    }

    async isArticleCreated(articleTitle: string) {
        await this.pages.action.isTextDisplayed(articleTitle)
    }
}
