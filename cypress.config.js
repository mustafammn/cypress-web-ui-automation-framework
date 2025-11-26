const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",

    // Turn ON video + screenshot
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",

    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      return config;
    },
  },

  hideXHR: true,
});
