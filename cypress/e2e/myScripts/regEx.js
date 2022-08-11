it('CONTAINS with RegEx', () => {

  // cy.contains('Add').click() //Always clicks the first button

  cy.contains(/^add$/i).click() // Clicks the second button now

})
