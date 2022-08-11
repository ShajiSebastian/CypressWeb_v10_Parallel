// cy.session allows scypress to cache all cookies, tokens, data from our sessions. It can be reused and subsequent tests executed quickly. 
// It will refer the previous login session instead of programatically login each time
// if multiple tests are using same login its better to use session
// cy.session() can be enabled by setting experimentalSessionAndOrigin:true in cypress.config.js files
// https://medium.com/@mohdjeeshan007/cache-session-using-cy-session-e8d3ebbd2056
// https://www.youtube.com/watch?v=1SOn8NbZF4o&t=2s

describe('Usage of session', () => {

  beforeEach(() => {
    cy.loginWithSession('userid','password') // refer commands.js

  })

  it('Test1', function() {
    // here we are using loginWithSession. Login happens very fast
    })
  
  it('Test2', function() {
    // here we are using loginWithSession. Login happens very fast    
    })
  
  it('Test3', function() {
    // here we are using loginWithSession. Login happens very fast
    })

  })