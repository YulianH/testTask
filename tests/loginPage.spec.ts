import { test } from '@playwright/test'
import { Pages } from '../pages/page'
import { UserLoginData } from '../pages/types'

let pages: Pages,
    user: UserLoginData

test.describe.serial('Login', () => {

  test.beforeAll(async ({ browser }) => {
    pages = new Pages()
    await pages.createPage(browser)
  })

  test('Sign Up Flow', async () => {
    user = await pages.loginPage.signUp()
    await pages.loginPage.isUserCreated(user.userName)
  })

  test('Sign In Flow', async () => {
    await pages.loginPage.signIn(user.email, user.password)
    await pages.loginPage.isUserCreated(user.userName)
  })

})
