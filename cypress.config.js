const { defineConfig } = require("cypress");
const unzipping = require('./cypress/plugins/unzipping.js')
module.exports = defineConfig({
    e2e: {
    downloadsFolder: "cypress\\downloads",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
}
    },
  },
);
