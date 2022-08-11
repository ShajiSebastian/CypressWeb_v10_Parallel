// We can write common selectors here. In this we are assigning selectors to a variable. eg:#txtUsername is assigned to usernameInput
// we have to export this class

class homePage {

    //common locators
    usernameLocator = '#txtUsername';
    passwordLocator = '#txtPassword';
    secretKeys = ['a','b','c']

    
    //common methods

    navigateGoogle(url) {
        cy.visit(url)
    }

    acceptPolicy() {
        return cy.contains('I agree')
    }

    searchText() {
        return cy.get('.gLFyf')
    }

    usernameInput() {
        return cy.get(this.usernameLocator)
    }

    passwordInput() {
        return cy.get(this.passwordLocator)
    }

    loginBtn() {
        return cy.get('#btnLogin')
    }

    welcomeTxt() {
        return cy.get('#welcome')
    }

    logoutTxt() {
        return cy.contains('Logout')
    }

    // postTitles() {
    //     return cy.get('.post-title')
    // }

    verifyFirstResult() {    
        //matches partial text of result string
        return cy.get('h2').text().then(value => {
          cy.log("Text is :", value);
          expect(value).to.include('Pok');
          
        });
      }
}

export default homePage;
