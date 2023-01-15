const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Global configuration: These settings are applicable for both e2e and component
  videoUploadOnPasses: false,
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0,
  },
  // E2E section: Options that are applicable only for e2e tests
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com",
    testIsolation: false,
  },
  env: {
    username: "standard_user",
    password: "secret_sauce",
  },
});
