// add experimentalSessionAndOrigin: true in cypress.config.js. This may cause failure in other scripts
// https://docs.cypress.io/api/commands/origin#SSO-login-custom-command
//https://medium.com/@mohdjeeshan007/running-cypress-specs-across-multiple-domains-6a35a49a3171

it.skip('Multiple domain url- login through third party app',()=>{
    //visit circleci login page
    cy.visit("https://circleci.com/vcs-authorize/");

    //click on sign in link
    cy.contains("Log In with GitHub").click({ force: true });

    //click on 'login with Github' button
    cy.origin("https://github.com", () => {
      cy.get("#login_field").type("************");
      cy.get("#password").type("********");
      cy.get("input").contains("Sign in").click();
    });

    // should load circleci app with logged in user
    cy.url().should("contain", "https://app.circleci.com/");

  })



it.skip('Multiple domain url- login through third party app - using custom command',()=>{

  cy.login('A4600', 'abcd')
})

describe('Document Test Suite Commands', () => {

  before(() => {
      
  });
})

describe.skip('Usage of origin and forEach', () => {
  const clients = {
    urls: [
      {
        siteurl: 'https://www.acme.com',
        subpage: '/updates/',
      },
      {
        siteurl: 'https://www.google.co.uk',
        subpage: '/search?q=cypress+io',
      },
    ],
  };

  it('test1', () => {
    clients.urls.forEach(client => {
      cy.origin(client.siteurl, { args: { client } }, ({ client }) => {
        cy.visit(client.subpage);
      });
    })
  });
});

it.skip('test2', () => {
const sentArgs = { 
  username: 'username', 
  password: 'P@55w0rd!' 
}
cy.origin('https://about.google/',{ args: sentArgs },({ username, password }) => {
    cy.visit('/google-in-uk/')
cy.log('Username :'+ username)
cy.log('password :'+ password)
  }
)
})


//Try the below code. trying to invoke url within origin
// let link;

// cy.visit('https://yopmail.com/en/')
// cy.get('.ycptinput').type('some_name {enter}')
// cy.wait(2000)
// cy.get('#ifmail').its('0.contentDocument.body')
//   .then($body => {
//     link = $body.find('a')[0].href
//   })

// cy.then(() => {          // this just waits for above block to complete

//   cy.origin(link, { args: { link } }, ({ link }) => {

//     cy.visit(link)       // same as ".find('a').click()" but works cross-domain
//   })
// })
    