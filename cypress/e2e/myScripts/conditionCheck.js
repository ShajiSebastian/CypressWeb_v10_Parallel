it.skip('if statement', () => {
cy.get("body").then($body => {
    if ($body.find("selector").length > 0) {
        cy.get("your_loc']").then($header => {
            if ($header.is(':visible')) {
                //you get here only if button EXISTS and is VISIBLE
            } else {
                //you get here only if button EXISTS but is INVISIBLE
            }
        });
    } else {
        //you get here if the button DOESN'T EXIST
        assert.isOk('everything', 'everything is OK');
    }
})
});

it.skip('if statement', () => {
    cy.visit("https://www.gov.uk/")
    // cy.get('#L2AGLb > .QS5gu').click()
    cy.get("body").then($body => {
        if ($body.find("h1").length) {
            console.log('found Gmail option')
            return "h1"
            }
        else {
            console.log('didnt find Gmail option')
                return "h1"
            }
        }).then((selector) => {
                cy.log(`found the selector ${selector}`)
              })
            })


it.skip('Sync and Async command- Learning', () => {
    cy.visit("https://www.gov.uk/")
        if (cy.get('body').find("h1").length) {
            cy.log('found selector by cy command')
            console.log('found selector by console command')
        }
        else{
            cy.log('didnt find selector by cy command')
            console.log('didnt find selector by console command')
        }
    })

it.skip('Toggle Check box- check/uncheck', () => {
    cy.visit("https://qavbox.github.io/demo/signup/")
    cy.get('[value="automationtesting"]').then(($checkbox) => {
        const initial = Boolean($checkbox.prop('checked'))
        // let's toggle
        cy.log(`Initial checkbox: **${initial}**`)
        // toggle the property "checked"
        $checkbox.prop('checked', !initial)
        })
    })


it('Toggle Check box- check/uncheck', () => {
    cy.visit("https://qavbox.github.io/demo/signup/")
    cy.get('[value="automationtesting"]').as('checkbox')
        .invoke('is', ':checked') // use jQuery $.is(...)
        .then((initial) => {
            cy.log(`Initial checkbox: **${initial}**`)
            if (initial) {
                cy.get('@checkbox').uncheck()
            } 
            else {
                cy.get('@checkbox').check()
            }
        })
    })


