// example.cy.js

describe('Home de freeRangeTesters', () => {
    beforeEach('Visits the Free Range Testers website and checks the title', () => {
        // Visita la página web
        cy.visit('https://www.freerangetesters.com');
    });
    
    it('Visits the Free Range Testers website and checks the title', () => {
      // Verifica que el título de la página sea correcto
      cy.title().should('include', 'Free Range Testers')
    });

  });
  