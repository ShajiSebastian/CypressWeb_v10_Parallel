// write our scripts here. And common methods in another folder (/utils or /pages folder) to reuse it. can write locators in a separate file too.

//option1: common locators in separate file
describe.skip("Web Elements are stored in JSON File", function () {
  it("Login Test", function () {
    const login = require("../../../Pages/locators/locator1");
    // import login from '../../../Pages/locators/locator1'
  
    cy.visit("");
    
    cy.fixture("logindetails.json").then((user) => {
      cy.get(login.Email).type(user.email);
      cy.get(login.Password).type(user.password);
    });

    cy.get(login.SubmitButton).click();
    cy.contains("").should("be.visible");
  });
});

//option1: common methods in separate file
import pageObj from '../pages/methods/pageObjectModelPage' //importing the locators and methods given in /pages folder
const pageObject = new pageObj();

describe('common selectors and methods is written in pages folder', () => {

  it('Google search', function () {
    pageObject.navigateGoogle('https://www.google.com/');
    pageObject.acceptPolicy().click()
    pageObject.searchText().type('automation{enter}');
  })

})




// option2: writing common methods and locators in separate files (ie common methods in /utils and selectors in /pages folder)
describe('Validate Login and Logout on OrangeHRM website', function () {

  beforeEach(function () {
    cy.fixture('pieChartTestData').then(function (testdata) {
      this.testdata = testdata
    })
  })

  it('Validate successful Login', function () {
    cy.login(this.testdata) // if login is a common function we can write it over /utils folder
  })

  it('Validate successful Logout', function () {
    cy.logout()
  })

})

describe('Testcase from qualityshepherd.com', () => {
  beforeEach(() => {
    cy.goto()
  })

  it('should display 7 posts per page', function () {
    cy.posts().should('have.length', 7)

  })
})
