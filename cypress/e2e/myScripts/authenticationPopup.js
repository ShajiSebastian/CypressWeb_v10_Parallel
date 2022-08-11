/// <reference types="cypress"/>

  it('Authentication 1', () => {
    cy.visit('https://the-internet.herokuapp.com/basic_auth', {
      auth: {
          username: 'admin',
          password: 'admin',
        }
      })
    });

    it('Authentication 2', () => {
      cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
      })

  
    it('Authentication using cy.request', () => {
        cy.request({
            method: 'POST',
            url: 'https://the-internet.herokuapp.com/authenticate',
            form: true,
            body: {
              username: 'tomsmith',
              password:'SuperSecretPassword!'
            },
          });
          cy.visit('https://the-internet.herokuapp.com/secure');
          cy.get('h4').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.');
          cy.get('.button').click();
    });

      // if loging is a common functionality we can add it in support folder
      // Cypress.Commands.add("login", (email, password) => {
      //   cy.request("http://localhost:3000/api/auth/login", {
      //     email,
      //     password,
      //   }).then((r) => {
      //     window.localStorage.setItem("token", r.body.token)
      //   })
      // })
      // cy.login("jon@example.com", "password")

