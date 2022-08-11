// if we use blur() focus will go out of it. Ie if we were typing the cursor will move out of it


  Cypress.Commands.overwrite('log', (log, message, ...args) => {
    // print the to Cypress Command Log
    // to preserve the existing functionality
    log(message, ...args)
    // send the formatted message down to the Node
    // callback in the cypress.config.js to be printed to the terminal
    cy.task('print', [message, ...args].join(', '), { log: false })
  })
  
  it('prints log messages', function () {
    cy.log('Hello')
    cy.log('Hello', 'world')
  })
