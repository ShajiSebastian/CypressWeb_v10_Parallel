// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')
//import 'cypress/integration/pages/utils/pageObjectModelUtils'

//The following code given as there was some uncaught exception occured when we called skyscanner.com site in one test. 
// this code will ignore the unknown exception. This is a common code for all scripts
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

Cypress.on('uncaught:exception', () => {
  false
})

