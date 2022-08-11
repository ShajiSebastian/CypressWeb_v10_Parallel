// converts excel to JSON format and creating corresponding json file
// Script taken from https://github.com/untoldstory69/dataDrivenCypressExcel.git


let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
  before(() => {
     cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
      })
      cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
      })
    it ('Data Driven: Register User', () => {
      cy.fixture('xlsxData').then((user) => {
         for ( let i = 0; i < rowsLength; i++) {
            cy.get('input[type=email]').clear();
            cy.get('input[type=email]').type(user.rows[i].Username);
            cy.get('input[type=password]').type(user.rows[i].Password);
            cy.wait(1000)
          }
        })
      })     
     })
