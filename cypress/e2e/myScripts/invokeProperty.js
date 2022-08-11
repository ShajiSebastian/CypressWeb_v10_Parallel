it('Invoke Property',()=>{
  cy.visit('https://codenboxautomationlab.com/practice/')
cy.get('input').invoke('prop', 'checked').then(state => {
  cy.log('state is:' + state)
    cy.log(`checkbox is ${state ? 'checked' : 'not checked'}`)
  });
})
