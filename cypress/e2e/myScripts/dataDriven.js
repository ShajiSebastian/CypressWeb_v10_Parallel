it('should type in just spaces', () => {
  const errorMessages = [
      'First name is required',
      'Last name is required',
      'Invalid email format',
      'Subject is required' 
  ];
  errorMessages.forEach(msg => {
      cy.log('message is', msg)
  });
});


describe("Login data driven ", function () {
  it("Login Test - direct test data", function () {
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    cy.get('input[type="email"]').type("qaboxletstest@gmail.com");
    cy.get('input[type="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.contains("No articles are here... yet.").should("be.visible");
  });

  it("Login Suite - Data from external fixture file", function () {
    //Arrange
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act
    cy.fixture("loginDetails.json").then((user) => {
      cy.get('input[type="email"]').type(user.email);
      cy.get('input[type="password"]').type(user.password);
    });
    cy.get('button[type="submit"]').click();
    //Assert
    cy.contains("No articles are here... yet.").should("be.visible");
  });

})
describe("Login Suite - Data from external fixture file - and BeforeEach", function () {
  let userDetails;
  beforeEach(() => {
    cy.fixture("loginDetails.json").then((user) => {
      userDetails = user;
    });
  });
  it("Login Test", function () {
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    cy.get('input[type="email"]').type(userDetails.email);
    cy.get('input[type="password"]').type(userDetails.password);
    cy.get('button[type="submit"]').click();
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

// In arrow functions there are no binding of this.
// In regular functions the this keyword represented the object that called the function.

describe("Login Suite - Data from external fixture file - This keyword and BeforeEach", function () {
  beforeEach(function () {
    cy.fixture("logindetails.json").then((user) => {
      this.userDetails = user;
    });
  });
  it("Login Test", function () {
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    cy.get('input[type="email"]').type(this.userDetails.email);
    cy.get('input[type="password"]').type(this.userDetails.password);
    cy.get('button[type="submit"]').click();
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

describe("Login Suite - Data from external fixture file - and Alias", function () {
  beforeEach(function () {
    cy.fixture("loginDetails.json").as("userDetails");
  });
  it("Login Test", function () {
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    cy.get('input[type="email"]').type(this.userDetails.email);
    cy.get('input[type="password"]').type(this.userDetails.password);
    cy.get('button[type="submit"]').click();
    cy.contains("No articles are here... yet.").should("be.visible");
  });
});

describe("Login Suite - Multiple Test Data scenarios", function () {
  
  const availablefixtures = [
    {
      name: "loginDetails",
      context: "1",
    },
    {
      name: "loginDetails2",
      context: "2",
    },
  ];

  availablefixtures.forEach((afixture) => {
    describe(afixture.context, () => {
      beforeEach(function () {
        cy.fixture(afixture.name).as("userDetails");
      });

  it("Multiple Test data from more than one fixture files- Testdata file: " + afixture.name, function () {
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    cy.get('input[type="email"]').type(this.userDetails.email);
    cy.get('input[type="password"]').type(this.userDetails.password);
    cy.get('button[type="submit"]').click();
    cy.contains("No articles are here... yet.").should("be.visible");
  });
    });
  });


  it("Multiple Test data from same file", function () {
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    cy.fixture("testData.json").each((user) => {
      cy.get('input[type="email"]').clear()
      cy.get('input[type="email"]').type(user.email);
      cy.get('input[type="password"]').type(user.password);
      cy.wait(1000)
    });
  });

  it("Multiple test data for different environment", function () {
    const testDataSet = require('../../fixtures/testDataSet.json')
    let Data1= testDataSet.Test // we have to pass dev as parameter from command line
    cy.visit("https://react-redux.realworld.io/#/login?_k=g43dop");
    //Act
    Data1.forEach((user) => {
      cy.get('input[type="email"]').clear()
      cy.get('input[type="email"]').type(user.email);
      cy.wait(1000)
    });
  })
  });