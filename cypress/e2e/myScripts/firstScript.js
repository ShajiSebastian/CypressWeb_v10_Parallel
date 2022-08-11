/// <reference types="cypress"/>

Cypress.config('pageLoadTimeout', 8000)  // this will get priority than cypress.json value

describe("Login Suite",  () =>{
  it("Login Test", function () {
    cy.log(this.test.parent.title);
    cy.log(this.test.title);
    cy.log(this.test);
  });

  it("Second Test", function (){
    cy.log(this.test.parent.title);
    cy.log(this.test.title);
  });
});

describe.skip('Sample test1', () => {
    beforeEach(() => {
      cy.visit('https://google.com');
      //cy.visit('/') //takes the value from baseUrl given in cypress.json. We can give a part of url also. it will append automatically
    });

    
it('Google test', function() {
  cy.contains('I agree').click()
  cy.get('.gLFyf').type('automation{enter}');
}); 

it('Configuration check', function() {
  let myConfig = Cypress.config()
  // cy.pause(5000)
  expect(myConfig).to.have.property('defaultCommandTimeout', 9000)
  cy.screenshot('Configure Check Failed');
  expect(Cypress.config('pageLoadTimeout')).to.eq(8000);
});

})

describe.skip('Sample test2', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
    //cy.visit('/') //takes the value from baseUrl given in cypress.json. We can give a part of url also. it will append automatically
  });

it('.trigger() - trigger an event on a DOM element. Sliding progress bar', () => {
  // https://on.cypress.io/trigger

  // To interact with a range input (slider)we need to set its value & trigger the event to signal it changed

  cy.get('.trigger-input-range')
    .invoke('val', 3)
    .trigger('change')
    .wait(2000)
    .invoke('val', 25)
    .trigger('change')
    .wait(2000)
    .invoke('val', 50)
    .trigger('change')
    .wait(2000)
    .invoke('val', 75)
    .trigger('change')
    .wait(2000)
    .invoke('val', 100)
    .trigger('change')
    .wait(2000)
    .get('input[type=range]').siblings('p')
    .should('have.text', '75')
})
})

describe('Sample test2', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/connectors')
  });

it('.each() - iterate over an array of elements', () => {
  // https://on.cypress.io/each

  // cy.log(this.test.parent.title);
  // cy.log(this.test.title);
  // cy.log(this.test);
  cy.get('.connectors-each-ul>li')
    .each(($el, index, $list) => {
      console.log('$el:::',$el, 'index:::',index,'$list:::', $list)
    })
})


})