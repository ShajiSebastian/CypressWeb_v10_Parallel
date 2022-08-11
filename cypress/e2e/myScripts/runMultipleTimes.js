// using to debug the flakiness in the script

Cypress._.times(10, () => {
it('Run multiple times',()=>{
  cy.visit('https://www.npmjs.com/package/uuid')
})
})
