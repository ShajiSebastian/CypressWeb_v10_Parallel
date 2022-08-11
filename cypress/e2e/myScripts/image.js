// if we use blur() focus will go out of it. Ie if we were typing the cursor will move out of it

it('image',()=>{
  cy.visit('https://amazone.co.uk/en-gb/')
  cy.get('div:nth-child(1) > a > div.cm-teasable__picture-box.ratio-4x2 > img')
  .should('have.attr', 'src', '/resource/image/1095324/4x2/1920/960/f7be9735829745ef6f2f7249dfaf3c96/A8901E496A75AD14DD0EC67951EEFD69/teaser-zukunft-bodenbearbeitung.jpg')
})

it('image loaded check',()=>{
  cy.visit('https://amazone.co.uk/en-gb/')
cy.get('div:nth-child(1) > a > div.cm-teasable__picture-box.ratio-4x2 > img')
.should('be.visible')
.and(($img) => {
  // "naturalWidth" and "naturalHeight" are set when the image loads
  expect($img[0].naturalWidth).to.be.greaterThan(0)
})
})
