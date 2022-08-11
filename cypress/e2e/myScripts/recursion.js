
describe("Recursion", () => {
    it("Recursion", () => {
      function test(index) {
        if (index >= 10) {
          return false;
        } else {
          cy.log(index);
          test(++index);
        }
      }
      test(1)
    });
    
})
