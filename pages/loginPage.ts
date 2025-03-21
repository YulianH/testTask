import { Page } from "@playwright/test"
import { Pages } from "./page"
import { locators } from "./locators"
import { dataSet } from "../utils/dataSet"

export class LoginPage {
    page: Page

    constructor(private pages: Pages) { }

    async inputEmail(email: string) {
        await this.pages.action.inputValue(locators.loginPage.emailInput, email)
    }

    async inputPassword(password: string) {
        await this.pages.action.inputValue(locators.loginPage.passwordInput, password)
    }

    async inputUserName(userName: string) {
        await this.pages.action.inputValue(locators.loginPage.userNameInput, userName)
    }

    async clickSignInBtn() {
        await this.pages.action.clickButton(locators.loginPage.signInBtn)
    }

    async clickSignUpBtn() {
        await this.pages.action.clickButton(locators.loginPage.signUpBtn)
    }

    async clickCreateAccountBtn() {
        await this.pages.action.clickButton(locators.loginPage.createAccountBtn)
    }

    async clickLoginBtn() {
        await this.pages.action.clickButton(locators.loginPage.loginBtn)
    }

    async isUserCreated(userName: string) {
        await this.pages.action.isElementDisplayed(locators.homePage.profileBtn(userName), true)
    }

    async signUp() {
        const userName = dataSet.randomName
        const email = dataSet.randomEmail
        const password = dataSet.randomPassword

        await this.pages.action.openPage('/user/register')
        await this.inputUserName(userName)
        await this.inputEmail(email)
        await this.inputPassword(password)
        await this.clickSignUpBtn()
        await this.isUserCreated(userName)

        return { userName, email, password}
    }

    async signIn(email: string, password: string) {
        await this.pages.action.openPage('/user/register')
        await this.inputEmail(email)
        await this.inputPassword(password)
        await this.clickSignInBtn()
    }

}
