// https://medium.com/@mohdjeeshan007/read-clipboard-text-in-cypress-3381e61f14c4

it('clipBoard text',()=>{
  cy.visit('https://www.npmjs.com/package/uuid')
  cy.get('[title="Copy Command to Clipboard"]').click();
    cy.window().its('navigator.clipboard').invoke('readText').then(cy.log);
})
