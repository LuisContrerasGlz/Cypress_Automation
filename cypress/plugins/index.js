// cypress/support/index.js

// Importa comandos personalizados si tienes alguno
import './commands';

// Ejemplo de configuración global: Desactivar capturas de pantalla automáticas en pruebas fallidas
Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false
});

// Manejar excepciones no capturadas
Cypress.on('uncaught:exception', (err, runnable) => {
  // Impedir que Cypress falle la prueba en caso de excepciones no capturadas
  // Puedes agregar lógica para manejar ciertas excepciones o solo ignorarlas
  console.log('Uncaught Exception:', err.message);

  // Devuelve false para evitar que Cypress falle la prueba
  return false;
});
