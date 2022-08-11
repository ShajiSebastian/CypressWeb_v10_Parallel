/// <reference types="cypress"/>
describe('Test Broken Links', () => {


  it.skip('Traditional way of checking broken links', () => {

    cy.visit('/')
  
    // blog page
    cy.contains('blog').click()
    cy.location('pathname').should('eq', '/blog')
    cy.go('back')
  
    // about page
    cy.contains('about').click()
    cy.location('pathname').should('eq', '/about')
    cy.go('back')
  
    // contact page
    cy.contains('contact').click()
    cy.location('pathname').should('eq', '/contact')
    cy.go('back')
  
  });

  it.skip('Traditional way of checking broken links - using a loop', () => {

    const pages = ['blog', 'about', 'contact']
  
    cy.visit('/')
    pages.forEach(page => {
      cy.contains(page).click()
      cy.location('pathname').should('eq', `/${page}`)
      cy.go('back')
  
    })
  
  });

  it('check all links on page- Highly recommended approach', () => {

    cy.visit('https://www.ajbell.co.uk/')
    cy.get("a:not([href*='mailto:]']").each(page => { // a indicates all url. have to avoid links that point to email addresses
      cy.request(page.prop('href'))
    })
  
  });

  it.only('check single link on a page- Highly recommended approach', () => {
    cy.visit('https://www.lambdatest.com/blog')
  cy.get("a:not([href*='mailto:]']").invoke('attr', 'href').then((href) => {
    cy.request(href).its('status').should('eq', 200);
    });
  })

  it('checking for broken links', () => {
    cy.visit('https://www.lambdatest.com/blog')

    cy.get("a:not([href*='mailto:]']").each($el => {
      if ($el.prop('href').length > 0) {
        const message = $el.text()
        cy.log('message::' + message)
        expect($el, message).to.have.attr("href").not.contain("undefined")
        cy.log($el.attr('href'))
      }
    })
  })

  it('Getting number of links', () => {
    cy.visit('https://www.lambdatest.com/blog')

    cy.get("a:not([href*='mailto:]']").its('length').then((count) => {
      cy.log('count:::', count)
    })

    cy.get("a:not([href*='mailto:]']").then(ele => {
      cy.log('Length:::' + ele.length);
    })
  })

})

it.skip('Getting number of links', () => {
cy.get('a').each( link => {
  cy.request(page.prop('href'))
})
})
