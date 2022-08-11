/// <reference types="cypress"/>

it('Wrap command', () => {
  cy.wrap("This is to demonstrate wrap command. This will display in cypress test runner")
  cy.wrap({ 
    name: 'Shaji sebastian' 
  })
  const getName = () => {
    return 'Jane Lane'
  }
  
  cy.wrap({ name: getName }).invoke('name').should('eq', 'Jane Lane') 
})
