const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/testescucumber/*.feature',
    baseUrl: 'https://ticket-box.s3.eu-central-1.amazonaws.com/index.html', // Adicionado para consistência
    supportFile: false
  },
});
