/// <reference types="cypress"/>
// https://www.w3schools.com/jsref/jsref_tolocalestring.asp
  it('Get Year', () => {
    const date = new Date()
    const Time = new Date().getTime()
    const Month = new Date().getMonth() //returns index of month as digit. index starts from Zero
    const Year = new Date().getFullYear()

    const Months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October','November','December']
    const currentMonth = Months[Month]
    const nextMonth = Months[Month+1]
    cy.log('Date: '+ date)
    cy.log('Time: '+ Time)
    cy.log('Month: '+ Month)
    cy.log('currentMonth: '+ currentMonth )
    cy.log('nextMonth: '+ nextMonth )
    cy.log('Year: '+ Year)

    });


    it.only('Convert Epoch Timestamp', () => {
    var d = new Date(1659619678*1000)
    cy.log('Date only: '+ d.toLocaleDateString())
    cy.log('Date with time: ' + d.toLocaleString())
    // cy.log('Epoch Timestamp converted string format: ' + d.toString())
    // cy.log('Epoch Timestamp converted string format2: ' + d.toUTCString())
    // cy.log('Epoch Timestamp converted date: ' + d.getDate())
    // cy.log('Epoch Timestamp converted hours: ' + d.getHours())
    // cy.log('Epoch Timestamp converted month: ' + d.getMonth())
    // cy.log('Epoch Timestamp converted minutes: ' + d.getMinutes())
    // cy.log('Epoch Timestamp converted seconds: ' + d.getSeconds())
    // cy.log('Epoch Timestamp converted mlliseconds: ' + d.getMilliseconds())
    })
