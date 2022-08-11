// if we use blur() focus will go out of it. Ie if we were typing the cursor will move out of it

// cypress.config('pageLoadTimeOut',10000) // this should be within describe block but outside of It. affects only in the page
it.skip('Array and usage of ',()=>{

  let errorUrls = []

  for (let url in data.PRODUCTS_PAGES) {
  cy.visit(data.PRODUCTS_PAGES[url])

  cy.get('div.configurator-controls span').invoke('text')
    .then(text => {
      if (text !== data.PRODUCTS_PAGES[url]) {
        errorUrls.push(e.message)
      }
    })
}

cy.then(() => {
  cy.log(errorUrls)
  expect(errorUrls).to.have.length(0)
})
})

options = ['option1','option2','option3'];
options.forEach((option) =>{
  cy.get('[test-id="react-select"]').then((reactSelect) =>{

      const selector = `[class="select__multi-value__label"]:contains(${option})`
      if(reactSelect.find(selector).length == 0){
     }
   })
})
