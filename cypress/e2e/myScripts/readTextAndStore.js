

// import homePage from '../pages/methods/pageObjectModelPage' //importing the locators and methods given in /pages folder
// const HomePage = new homePage();

// it("reading a text", () => {
//   cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo")
//   cy.get("h2").then((h2) => {
//      window.text = h2.text() // use 'window' if we want to use this text in another test. else not required
//     cy.log('text1:',text);;;;
//   })
// })

// it("taking value from another test", () => {
//   cy.log('text3:',window.text)
// })


// it.skip("reading a text", () => { // this script works fine in Far11ven git repo
//   cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo");
//   let result = HomePage.verifyFirstResult();
//   cy.log('result is:', result)
// });


// it("taking value from outside of then block", () => {
//   cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo")
//   cy.get('h2').invoke('text').as('txt');
//   cy.then(function (){
//   cy.log("Text inside then fn: ", this.txt);
//   })
// })

// it.only("reading a text", () => {
//   cy.visit("https://www.lambdatest.com/selenium-playground/simple-form-demo")
//   cy.get("h2").then((h2) => {
//     h2.text().as('example')
//   }).
//   cy.log("Text outside then fn: ", this.example);
// })
