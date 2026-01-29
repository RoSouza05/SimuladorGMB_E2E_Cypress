const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

   // SCREENSHOTS
  screenshotsFolder: "C:/SimuladorGMB/cypress/screenshots",
  screenshotOnRunFailure: true,      // ativa screenshots automáticos em falhas
  trashAssetsBeforeRuns: true,       // limpar artefatos antes do run

  // VIDEOS
  videosFolder: "cypress/videos",
  video: true,                       // ativa gravação de vídeo
  videoCompression: 32,              // compressão (menor valor = maior qualidade)
  videoUploadOnPasses: true,         // controla upload no dashboard Cypress

    //experimentalStudio:true,
    //video:true

});
//C:\SimuladorGMB\cypress