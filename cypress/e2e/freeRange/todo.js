// example.cy.js
// en versiones anteriores debe ser example.spec.js 

describe('My First Cypress Test', () => {
    beforeEach('Visits the Free Range Testers website and checks the title', () => {
        // Visita la página web
        cy.visit('https://www.freerangetesters.com');
    });
    
    it('Visits the Free Range Testers website and checks the title', () => {
      // Verifica que el título de la página sea correcto
      cy.title().should('include', 'Free Range Testers');
    });
  
    it('Finds an element and interacts with it', () => {
      // Encuentra un elemento por su texto y hace clic
      cy.contains('Courses').click();
  
      // Verifica que la URL haya cambiado
      cy.url().should('include', '/courses');
    });
  });
  