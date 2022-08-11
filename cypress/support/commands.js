// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// import cypress from "cypress";

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

export const fillOutContactForm = ({ firstName, lastName, email, number, subject }) => {
    // First Name
    cy.getDataTag('first-name')
        .clear()
        .type(firstName);
    // Last Name
    cy.getDataTag('last-name')
        .clear()
        .type(lastName);
    // Email
    cy.getDataTag('email')
        .clear()
        .type(email);
    // Number
    cy.getDataTag('number')
        .clear()
        // @ts-ignore
        .type(number);
    // Subject
    cy.getDataTag('subject-area')
        .clear()
        .type(subject);
};

// excel read function. This is required for both excelRead1 and excelRead2
Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile })
    });

//usage of origin in commands.js
// cypress.commands.add("login", (email,password) =>{
//     cy.visit('wikipage.com');
//     cy.origin('google.com',{ args:[email,password]},([email,password]) => {
//         cy.get('#username').type(email);
//         cy.get('#password').type(password);
//         cy.get('#submit').click();
//     }
//     );
//     //write code of wikipedia here
// })

//usage of session
// cypress.commands.add("loginWithSession", (email,password) =>{
//     cy.session([email,password],()=> { // this will help to cache the login session
//         cy.visit('wikipage.com');
//         cy.get('#username').type(email);
//         cy.get('#password').type(password);
//         cy.get('#submit').click();
//     })
// })