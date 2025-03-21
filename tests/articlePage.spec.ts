import { test } from '@playwright/test'
import { Pages } from '../pages/page'
import { dataSet } from '../utils/dataSet'

let pages: Pages

test.describe('Articles', () => {

  test.beforeAll(async ({ browser }) => {
    pages = new Pages()
    await pages.createPage(browser)
    await pages.loginPage.signUp()
    await pages.action.openPage('/editor')

  })

  test('Create New Article', async () => {
    await pages.articlePage.createNewArticle(dataSet.articleTitle, dataSet.articleAbout, dataSet.articleText, dataSet.articleTag)
  })

})
