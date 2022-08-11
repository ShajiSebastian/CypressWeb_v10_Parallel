// converts excel to JSON format and directly using in script ( ie not creating corresponding json file)
// https://www.youtube.com/watch?v=SrEnDHyJpD4&t=886s
// refer code given in plugins/index.js

it.only("Excel read- converting to json (but not saving the json file)", function() {
  //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    const excelFilePath =
    "/Users/shajisebastian/Desktop/Shaji/Learning/Automation/Cypress/CypressWeb/cypress/fixtures/excelData.xlsx";
    const sheetName = "Sheet1";
  // Replace cy.fixture with task to read dat from excel and convert that into json
   cy.task("generateJSONFromExcel", { excelFilePath, sheetName }).then((users) => {
        users.forEach((user) => {
          cy.get('input[type=email]').clear();
          cy.get('input[type=email]').type(user.Username);
          cy.get('input[type=password]').type(user.Password);
          cy.wait(1000)
        })
      })
  })
