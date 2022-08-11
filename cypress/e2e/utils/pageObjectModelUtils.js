// write common methods here. we have to import this file in /index file. Then it will be available to all scripts.
// If any selector is common in this common method then we can move that to /pages folder to reuse it in other scripts.
// If we are writing selectors in /pages folder we have to import it here to get it
// mention the file name in index.js

// import loginPage from '../pages/loginPage.js'
// import dashboardPage from '../pages/dashboardPage.js'
// const login = new loginPage();
// const dashboard = new dashboardPage();

import pageOBJ from '../pages/pageObjectModelPage' //importing the locators and methods given in /pages folder
const pageObject = new pageOBJ();

Cypress.Commands.add('login', (data) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    pageObject.usernameInput().type(data.username)
    pageObject.passwordInput().type(data.password)
    pageObject.loginBtn().click()
    pageObject.welcomeTxt().contains(data.welcomeText)
})

Cypress.Commands.add('logout', () => {
    pageObject.welcomeTxt().click()
    pageObject.logoutTxt().click()
    pageObject.usernameInput().should('be.visible')
})

Cypress.Commands.add('goto', () => {
    cy.visit('https://qualityshepherd.com/')
})

Cypress.Commands.add('posts', () => {
    return cy.get('.post-title')
    // return pageObject.postTitles() //if we want to write seectors in /pages folder
})
