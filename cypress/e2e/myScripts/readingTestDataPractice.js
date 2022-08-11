/// <reference types="cypress"/>

it('Test data reading practice',() => {
cy.fixture('testDataPractice').then( testData => {
    expect(testData[0].color).to.eq("red")
    expect(testData[0].id).to.eq(4)
    expect(testData[0].features[0]).to.eq('speed limiter')
    expect(testData[0].features).to.include('speed limiter') // General check

    expect(testData[0].color[0]).to.eq('r') // access first letter in "red"
    expect(testData[0].color).to.include('ed')

    expect(testData[0].features).to.deep.eq(["speed limiter", "panoramic windshield", "automatic transmission"])

    expect(testData[0].engine.horsepower).to.eq(175)
  })
})