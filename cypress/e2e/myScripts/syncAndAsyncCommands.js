

// Cypress commands are Asynchronous in nature. Ie Cypress commands are not executing right away. 
// Instead, it is in a queue. Later they executed in the order they added in the queue. 
// If you have any synchronous command in between the cypress command it will execute immediately. 
// Eg: if you have console.log in between cypress commands it will execute immediately. 
// If you want to execute one synchronous command after the asynchronous cypress command we can write the command uing .then().

describe("Mixing Sync & Async Code", () => {
    beforeEach(() => {
      cy.visit("/#/login?_k=ocipx1");
    });
    it.only("Mix of Sync and Async commands", () => {
      console.log("First Log"); //sync command
      cy.get('input[type="email"]').type("qaboxletstest@gmail.com"); //Async command
      console.log("Second Log"); //sync command
      cy.get('input[type="password"]').type("TEST"); //Async command
      console.log("Third Log"); //sync command
      cy.get('button[type="submit"]').click(); //Async command
      console.log("Fourth Log"); //sync command
    });

    //The below code wont work as expected because it contains both synchronous and asynchronous commands
    it.only("This wont work as expected", () => {
        let arr = [];
        cy.get("a").each((el) => { //Async command
   	    arr.push(el.text());
        })
   	console.log(`Anchor Tag Count - ${arr.length}`); //sync command
   	console.log(`Anchor Tags Text String  - ${arr.join(", ")}`); //sync command
   	});
  

//The issue can be resolved by
it.only("Solution for the above issue using then command", () => {
    let arr = [];
    cy.get("a").each((el) => {
      arr.push(el.text());
      }).then(() => {
        console.log(`Anchor Tag Count - ${arr.length}`);
        console.log(`Anchor Tags Text String  - ${arr.join(", ")}`);
      });
    })

    //or can be modified better using alias
    it.only("modified better", () => {
    let arr = [];
    cy.get("a").each((el) => {
   	    arr.push(el.text());
   	    }).as("myarr");
 
    cy.get("@myarr").then(() => {
   	    console.log(`Anchor Tag Count - ${arr.length}`);
   	    console.log(`Anchor Tags Text String  - ${arr.join(", ")}`);
   	});
})

    it.skip("Example - Fetch Text of all the Anchor Texts", () => {
      // Create a collection variable to store all the anchor tags
      let arr = [];
      // Find all the anchor tags and store their text in the collection variable created above
      // cy.get("a")
      //   .each((el) => {
      //     arr.push(el.text());
      //   })
      //   .as("myarr");
      // cy.get("@myarr").then(() => {
      //   console.log(`Anchor Tag Count - ${arr.length}`);
      //   console.log(`Anchor Tags Text String  - ${arr.join(", ")}`);
      // });
  
      // Print the count of anchor tags and join the array
      cy.get("a")
        .then((els) => {
          for (let index = 0; index < els.length; index++) {
            arr.push(Cypress.$(els[index]).text());
          }
          return arr;
        })
        .then((myarr) => {
          console.log(`Anchor Tag Count - ${myarr.length}`);
          console.log(`Anchor Tags Text String  - ${myarr.join(", ")}`);
        });
    });
  });
  