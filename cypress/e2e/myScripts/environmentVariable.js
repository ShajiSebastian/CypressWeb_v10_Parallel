/// <reference types="cypress"/>


// to run the script: npx cypress run --spec "cypress/integration/myScripts/readingFromCommandLine.js" --env ENV1="UserID" ENV2="PWD"
describe('Reading from command line', () => {

it('Readig from CLI', function() {
  // URL = Cypress.env('ENV1')
  // cy.visit(URL)
  let env1 = Cypress.env('ENV1')
  let env2 = Cypress.env('ENV2')
  cy.writeFile('commandReadOuput.txt', env1)
  cy.writeFile('commandReadOuput.txt',env2, { flag: "a+" })
  })
})

it.skip("Login Test", function () {
  //Arrange
  cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
  const login = require("../../../Pages/PageJSONs/loginPage");
  // cy.login(Cypress.env('username'), Cypress.env('password'));
  
  if (Cypress.env("email") && Cypress.env("password")) {
    let user = {
      email: Cypress.env("email"),
      password: Cypress.env("password"),
    };
    cy.get(login.Email).type(user.email);
    cy.get(login.Password).type(user.password);
  } else {
    cy.fixture("logindetails2.json").then((user) => {
      cy.get(login.Email).type(user.email);
      cy.get(login.Password).type(user.password);
    });
  }
})
