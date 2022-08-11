const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: true,
  'to disable auto run after any change in script. daefault is': true,
  'cypress open --config watchForFileChanges=false': 'cmd Command',
  '//default folder is': '/integration',
  video: true,'//default value is': 'true',
  screenshotOnRunFailure: true, //default is': 'true',
  watchForFilesChanges: false,
  viewportWidth: 1000,
  viewportHeight: 600,
  waitForAnimation: true,
  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,
  // scrollBehavior:false, // disabling auto scroll view to the element which is in use. scrollBehavior to be one of these values: "center", "top", "bottom", "nearest", false.
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 150000,
  responseTimeout: 150000,
  'failOnStatusCode-used to ignore failure based on resp code': false,
  retries: 0,
  reporter: '../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  projectId: '3ikmxp',
  Comments1:
    'overwrite: false will make sure that the report of the previous tests is not overwritten by the current test.',
  Comments2:
    '“html”: false will make sure that the HTML report is not generated after execution of a single test.',
  Comments3:
    '“json”: true makes sure that at the end of every test, a json file is created which would contain the details of its test run.',
  Comments4:
    'The above projectId is generated for Cypress Dashboard. Run the below command to get results in dashboard',
  Comments5:
    ' The command to generate report on dashboard is:npx cypress run --record --key 420fb2b4-ba0d-47c5-9006-e2e9ca6c7825',
  Comments6:
    'To override the default script location of Integration folder give integrationFolder : ./myScripts ',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    // experimentalSessionAndOrigin: true, // if we want to use multiple domain origin in a single test
    'process.env.BABEL_TYPES_8_BREAKING': 'false',
    setupNodeEvents(on, config) {
      
      if (config.isTextTerminal) { //optional    
        console.log('Shaji- scripts running in run mode (terminal)')
        return {
          excludeSpecPattern: ['cypress/e2e/all.cy.js'], // skip the all.cy.js spec in "cypress run" mode
        }
      }
      else {
        console.log('Shaji- scripts running in open mode (test runner')
      }
      on('task', { //Overwrite cy.log to print to the terminal. This is also optional
        print(s) {
          console.log(s)
          return null
        },
      })
      return require('./cypress/plugins/index.js')(on, config)
    },
    
    excludeSpecPattern: ['**/cypress/inte/abcd', '**/cypress/inte/pqrs'],
    baseUrl: 'https://google.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
  