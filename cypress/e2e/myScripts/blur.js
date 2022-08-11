// if we use blur() focus will go out of it. Ie if we were typing the cursor will move out of it

it('blur command',()=>{
  cy.visit('https://www.programsbuzz.com/user/login')
  cy.get('form').within(()=>{
    cy.get('#edit-name').focus().type('Shaji') // mouse pointer still there
    cy.wait(3000)
    cy.get('#edit-nameMMMM').focus().type('Christo').blur() // mouse pointer goes off
    cy.wait(3000)
  })
})
