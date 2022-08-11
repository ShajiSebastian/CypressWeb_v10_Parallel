const sum1 = (a, b) =>  a + b;
const mul1 = (p) => p*10;

  beforeEach(function () {
    cy.wrap({name1: sum1}).invoke('name1', 2, 8).as('sum2');
  });

  it.only('Function calls', function () {
    cy.wrap({name2: mul1}).invoke('name2', this.sum2).then(cy.log);
  });
