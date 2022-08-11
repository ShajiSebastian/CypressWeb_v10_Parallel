//code optimization using forEach loop

describe('Test Navigation', () => {
  it('can navigate and test the pages', () => {
    cy.visit('https://www.testing.com/at-home-coronavirus-testing/');
    cy.contains('PCR and Molecular COVID-19 Testing').click()
    cy.wait(2000)
    cy.go('back');
 
  //  cy.visit('https://www.testing.com/paying-for-covid-19-testing/');
   cy.contains('At-Home COVID-19 Antibody Test').click({force: true})
   cy.wait(2000)
   cy.go('back');
   
  //  cy.visit('https://www.testing.com/covid-19-antibody-testing/');
   cy.contains('At-Home COVID-19 PCR Test').click({force: true})
   cy.wait(2000)
   cy.go('back');
  });

it('Navigate through the links using forEach loops', () => {
 
  const texts = ['PCR and Molecular COVID-19 Testing', 'At-Home COVID-19 Antibody Test', 'At-Home COVID-19 PCR Test']
  cy.visit('https://www.testing.com/at-home-coronavirus-testing/');
 
  texts.forEach((text) => {
    cy.contains(text).click()
    cy.wait(2000)
    cy.go('back')
 
  })
 
})

  it.only("use lodash forEach to access the key values since dates is an object", () => {
    const dates = {
    street: "Bauweg",
    house_number: "22",
    post_code: "22222"
    }
      // use lodash forEach to access the key values since dates is an object
      Cypress._.forEach(dates, function(value, key){
          cy.log(key)
          cy.log(value)
        })
    })
});