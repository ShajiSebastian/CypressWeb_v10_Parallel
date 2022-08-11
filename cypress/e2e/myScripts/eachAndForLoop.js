// https://www.youtube.com/watch?v=8xYQtUU3Ju8&list=PLMZdod-kiMhKiRztQX_rng7EfcI5OteMR&index=29

Describe.skip("Loop Usage and Break Loop", () => {


  it.skip("without return", () => {
    let arr = [];
  cy.get("a").then((els) => {
    for (let index = 0; index < els.length; index++) {
      arr.push(Cypress.$(els[index]).text());
    }
  })
  .then(() => {
    console.log(`Anchor Tag Count - ${arr.length}`);
    console.log(`Anchor Tags Text String  - ${arr.join(", ")}`);
  });
})  

  it.skip("with return", () => {
    let arr = [];
  cy.get("a").then((els) => {
    for (let index = 0; index < els.length; index++) {
      arr.push(Cypress.$(els[index]).text());
    }
    return arr;
  })
  .then((myarr) => { // arr copying to myarr
    console.log(`Anchor Tag Count - ${myarr.length}`);
    console.log(`Anchor Tags Text String  - ${myarr.join(", ")}`);
  });
})  

  it.skip("break statement", () => {
    let array = [...Array(10).keys()];
    for (let index = 0; index < array.length; index++) {
      if (array[index] === 5) {
        break;
      }
      console.log(array[index]);
    }
  });

  it.skip("Basics - For Loop - Break Loop", () => {
    let array = [...Array(10).keys()];
    for (let index = 0; index < array.length; index++) {
      if (array[index] === 5) {
        break;
      }
      console.log(array[index]);
    }
  });

  it.skip("Example - Match an anchor text and click on it", () => {
    cy.visit("/#/login?_k=ocipx1");
    let arr = [];
    cy.get("a")
      .each((el) => {
        arr.push(el.text());
      })
      .then(() => {
        for (let index = 0; index < arr.length; index++) {
          if (arr[index] === "Sign up") {
            cy.get(`a:contains(${arr[index]})`).click();
            break;
          }
        }
      });
  });

  it('Validating the Quick Launch menu', function () {
    cy.visit('/index.php/dashboard')
    cy.get('.quickLaungeContainer').each(($el, index) => {
        expect($el).to.contain(this.testdata.quickLaunch[index])
    })
})
})

