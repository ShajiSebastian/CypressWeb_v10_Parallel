describe('Example to demonstrate the use each in Cypress', function () {

  it('Validate successful Login', function () {
      cy.wait(2000)
      cy.get('[data-testid=xterm]').type('{ctrl}{c}').type('touch FileCreatedFromTerminal.js{Enter}')
      cy.wait(2000)
  })

  it.only('rightclick', function () {
      cy.visit('https://www.google.com/')
    cy.wait(2000)
    cy.contains('I agree').click()
    cy.get('.lnXdpd').rightclick()
    cy.wait(2000)
})
 
})
