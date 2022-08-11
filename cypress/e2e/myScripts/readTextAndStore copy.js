

// import homePage from '../pages/methods/pageObjectModelPage' //importing the locators and methods given in /pages folder
// const HomePage = new homePage();

it.skip("variable defined inside then block", () => {
  cy.visit("https://www.google.com/")
  cy.get('#L2AGLb > .QS5gu').click()
  cy.get(':nth-child(1) > .gb_d').then((h2) => {
    let text = h2.text() // use 'window' if we want to use this text in another test. else not required
    cy.log('text1: '+ text); // prints correct value
  })
})

it.skip("variable defined outside of then block. wrong code", () => {
    cy.visit("https://www.google.com/")
    cy.get('#L2AGLb > .QS5gu').click()
    let text = null
    cy.get(':nth-child(1) > .gb_d').then((h2) => {
       text = h2.text()
    })
    cy.log('text: '+ text); // print null. 
  })

  // The above one prints null. This is because Cypress commands are asynchronous. In JavaScript, when you call a function, the primitive arguments are passed by value. Each argument's value at the moment of the call is copied and passed into the function.
  // The solution for the above issue is, We need to delay calling cy.log(username) until the variable username has a value. 
  //One solution is to move calling cy.log into its own .then block after the .then(($el) => (username = $el.text())) finishes.

// it("taking value from another test", () => {
//   cy.log('text3:',window.text)
// })

it.skip("variable defined outside of then block. Correct code", () => {
    cy.visit("https://www.google.com/")
    cy.get('#L2AGLb > .QS5gu').click()
    let text = null
    cy.get(':nth-child(1) > .gb_d').then((h2) => {
       text = h2.text()
        }).then(() => {
        cy.log('text: '+ text); // print correct value
  })
})
