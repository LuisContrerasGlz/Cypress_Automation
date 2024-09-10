const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

/*
//modulo para exportar videos de reproduccion de los test
module.exports = defineConfig({
//  e2e: {
    // Habilitar grabación de video (true por defecto)
    video: true,

    // Configurar la calidad del video (opcional)
    videoCompression: 32, // Comprimir el video (32 es el valor por defecto)

    // Personalizar el tamaño del video (opcional)
    videoUploadOnPasses: false, // No subir videos de pruebas exitosas (opcional)
    
    // Ruta donde se guardarán los videos
    videosFolder: 'cypress/videos',

    setupNodeEvents(on, config) {
      // implementar eventos de Node si es necesario
    },
  },
});*/