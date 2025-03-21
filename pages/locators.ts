export const locators = {
    loginPage: {
        createAccountBtn: 'a[href="/user/register"]',
        loginBtn: 'a[href="/user/login"]',
        signUpBtn: 'button.btn.btn-lg.btn-primary[type="submit"]',
        signInBtn: 'button.btn.btn-lg.btn-primary[type="submit"]',
        userNameInput: 'input[placeholder="Username"]',
        emailInput: 'input[placeholder="Email"]',
        passwordInput: 'input[placeholder="Password"]'
    },
    articlePage: {
        articleTitleInput: 'input[placeholder="Article Title"]', 
        aboutInput: `input[placeholder="What's this article about?"]`,
        articleTextInput: 'textarea.form-control',
        tagInput: 'input[placeholder="Enter tags"]',
        publishArticleBtn: 'button.btn.btn-lg.pull-xs-right.btn-primary[type="button"]',
        editArticleBtn: 'a.btn-outline-secondary:has-text("Edit Article")'
    },
    homePage: {
        profileBtn: (userName: string) => `a:has-text("${userName}")`
    }
}

