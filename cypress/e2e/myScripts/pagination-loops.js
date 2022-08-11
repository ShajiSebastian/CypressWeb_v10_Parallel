// it.skip("clicking on a single page", () => {
//     cy.visit("https://examples.bootstrap-table.com/template.html?v=134&url=options/table-pagination.html");
//     cy.get("li.page-item:not(.page-pre):not(.page-next)").eq(2).click();
// })

// it.skip("clicking on each page", () => {
//     cy.visit("https://examples.bootstrap-table.com/template.html?v=134&url=options/table-pagination.html");
//     cy.get("li.page-item:not(.page-pre):not(.page-next)").its("length").then((len) => {
//         const noOfPages = len
//         cy.log("No of pages::" + noOfPages)
//     }).then((len) => {
//         for (let i = 0; i < len; i++) {
//             cy.get("li.page-item:not(.page-pre):not(.page-next)").eq(i).click();
//             cy.wait(2000)
//         }
//     })
// })

// it.skip("clicking on each page and getting all text- for loop", () => {
//     cy.visit("https://examples.bootstrap-table.com/template.html?v=134&url=options/table-pagination.html");
//     cy.get("li.page-item:not(.page-pre):not(.page-next)").its("length").then((len) => {
//         const noOfPages = len
//         cy.log("No of pages::" + noOfPages)
//     }).then((len) => {
//         for (let i = 0; i < len; i++) {
//             cy.log("Page No::" + i)
//             cy.get("li.page-item:not(.page-pre):not(.page-next)").eq(i).click();
//             cy.wait(2000)
//             cy.get("table#table tr > td:nth-child(2)").its("length").then((count) => { // getting rows count and looping using for loop
//                 cy.log("No of texts in the page::" + count)
//             }).then((count) => {
//                 for (let k = 1; k <= count; k++) {
//                     cy.get(`table#table tr:nth-child(${k}) > td:nth-child(2)`).then((el) => {
//                         const text = el.text();
//                         cy.log('text in the cell:::' + text);
//                     })
//                 }
//             })

//         }
//     })
// })

// it.skip("clicking on each page and getting all text- each method", () => {
//     cy.visit("https://examples.bootstrap-table.com/template.html?v=134&url=options/table-pagination.html");
//     cy.get("li.page-item:not(.page-pre):not(.page-next)").its("length").then((len) => {
//         const noOfPages = len
//         cy.log("No of pages::" + noOfPages)
//     }).then((len) => {
//         for (let i = 0; i < len; i++) {
//             cy.log("Page No::" + i)
//             cy.get("li.page-item:not(.page-pre):not(.page-next)").eq(i).click();
//             cy.wait(2000)

//             cy.get("table#table tr > td:nth-child(2)")
//             .each((itemNameEl) => {
//               const itemText = itemNameEl.text();
//               cy.log('text in the cell:::' + itemText);
//             //   if (itemText === value) {
//             //     found = true;
//             //     return false;
//             //   }
//             })

//                 }
//             })
// })

// it.skip("clicking on each page and getting all text and comparing with expected test- each method", () => {
//     cy.visit("https://examples.bootstrap-table.com/template.html?v=134&url=options/table-pagination.html");
//     let expectedText = "Item 20" 
//     cy.get("li.page-item:not(.page-pre):not(.page-next)").its("length").then((len) => {
//         const noOfPages = len
//         cy.log("No of pages::" + noOfPages)
//     }).then((len) => {
//         for (let i = 0; i < len; i++) {
//             cy.log("Page No::" + i)
//             cy.get("li.page-item:not(.page-pre):not(.page-next)").eq(i).click();
//             cy.wait(1000)
//             cy.get("table#table tr > td:nth-child(2)")
//             .each((itemNameEl) => {
//               const itemText = itemNameEl.text();
//               cy.log('text in the cell:::' + itemText);
//               if (itemText === expectedText) {
//                 cy.log("Matching item found at Page number::"+ ++i)
//               }
//             })

//                 }
//             })
// })

// it("clicking on each page and getting all text and comparing with expected test- using functions", () => {

//     cy.visit("https://examples.bootstrap-table.com/template.html?v=134&url=options/table-pagination.html");
//     findItem("Item 10");
// })

//     function findItem(expectedText) {
//         let found = false;
//     cy.visit("https://examples.bootstrap-table.com/template.html?v=134&url=options/table-pagination.html");
//     cy.get("li.page-item:not(.page-pre):not(.page-next)").its("length").then((len) => {
//         const noOfPages = len
//         cy.log("No of pages::" + noOfPages)
//     }).then((len) => {
//         for (let i = 0; i < len; i++) {
//             if (!found){
//             cy.log("Page No::" + i)
//             cy.get("li.page-item:not(.page-pre):not(.page-next)").eq(i).click();
//             cy.wait(1000)
//             cy.get("table#table tr > td:nth-child(2)")
//             .each((itemNameEl) => {
//               const itemText = itemNameEl.text();
//               cy.log('text in the cell:::' + itemText);
//               if (itemText === expectedText) {
//                 cy.log("Matching shaji  item found at Page number::"+ ++i)
//                 found = true;
//                 break
//                 //return false;
//               } 
//             })
//             }
//         }
//         })
//     }


// describe("Recursion", () => {
//     it.skip("Recursion", () => {
//       function test(index) {
//         if (index >= 10) {
//           return false;
//         } else {
//           cy.log(index);
//           test(++index);
//         }
//       }
//       test(1)
//     });
    
// })


// // function findInPage(pageNumber) {
// //     cy.log('pageNumber:::' + pageNumber)
// //     pageNumber = pageNumber + 1
// //     if (pageNumber > 10) {
// //     }
// //     // findInPage(pageNumber)
// // }


//     // it.skip("Pagination", () => {
//     //   cy.visit(
//     //     "https://examples.bootstrap-table.com/template.html?v=134&url=options/table-pagination.html"
//     //   );
//     //   findItem("Item 2");
//     // });

// //     // Steps
// //     // 1. Build Mechanism to Iterate through Pages - Note - Page elements are refreshed
// //     // 2. Build Logic to Iterate through the table
// //     // 3. Once matching record is found, build logic to break all the loops

//     // function findItem(value) {
//     //   function findInPage(index) {
//     //     let found = false;
//     //     cy.get("li.page-item:not(.page-pre):not(.page-next)").as("pages");
//     //     cy.get("@pages")
//     //       .its("length")
//     //       .then((len) => {
//     //         if (index >= len) {
//     //           return false;
//     //         } else {
//     //           cy.get("@pages")
//     //             .eq(index)
//     //             .click();
//     //           cy.get("table#table tr > td:nth-child(2)")
//     //             .each((itemNameEl) => {
//     //               const itemText = itemNameEl.text();
//     //               console.log(itemText);
//     //               if (itemText === value) {
//     //                 found = true;
//     //                 return false;
//     //               }
//     //             })
//     //             .then(() => {
//     //               if (!found) {
//     //                 findInPage(++index);
//     //               }
//     //             });
//     //         }
//     //       });

// //         // cy.get("@pages")
// //         //   .its("length")
// //         //   .then((len) => [...Array(len).keys()])
// //         //   .each((index) => {
// //         //     cy.get("@pages")
// //         //       .eq(index)
// //         //       .click();
// //         //     cy.get("table#table tr > td:nth-child(2)").each((itemNameEl) => {
// //         //       const itemText = itemNameEl.text();
// //         //       console.log(itemText);
// //         //       if (itemText === value) {
// //         //         return false;
// //         //       }
// //         //     });
// //         //   });
// //       }
// //       findInPage(0);
// //     }

// //     // function findItem(value) {
// //     //   function findInPage(index) {
// //     //     let found = false;
// //     //     cy.get("li.page-item:not(.page-pre):not(.page-next)").as("pages");
// //     //     cy.get("@pages")
// //     //       .its("length")
// //     //       .then((len) => {
// //     //         if (index >= len) {
// //     //           return false;
// //     //         } else {
// //     //           cy.get("@pages")
// //     //             .eq(index)
// //     //             .click();
// //     //           cy.get("table#table tr>td:nth-child(2)")
// //     //             .each((itemNameEl) => {
// //     //               console.log(itemNameEl.text());
// //     //               if (itemNameEl.text() === value) {
// //     //                 found = true;
// //     //                 return false;
// //     //               }
// //     //             })
// //     //             .then(() => {
// //     //               if (!found) {
// //     //                 findInPage(++index);
// //     //               }
// //     //             });
// //     //         }
// //     //       });
// //     //   }
// //     //   findInPage(0);
// //     // }
// //   });

