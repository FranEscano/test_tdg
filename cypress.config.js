const { defineConfig } = require("cypress");
const unzipping = require('./cypress/plugins/unzipping.js')
const fs = require('fs');
const cypress = require("cypress");

module.exports = defineConfig({
  e2e: {
    downloadsFolder: "cypress/downloads",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        'unzipping': unzipping.unzip,
    })
}
    },
  },
);
