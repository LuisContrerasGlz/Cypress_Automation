describe('Home de freeRangeTesters', () => {
    beforeEach('Visits the Free Range Testers website and checks the title', () => {
        // Visita la página web
        cy.visit('https://www.freerangetesters.com');
    });
    
    it('verify class sc-epnzzT hAFALm', () => {
      // Verifica que la clase sea la buscada 
      cy.get('[data-react-component="creator_ui/section_adapters/Newsletter"] > .sc-egkSDF > [data-testid="container"] > .sc-fufdwm > .sc-Rjrgp > .sc-giBObj > .sc-UblHX > .sc-kBAPdo > .sc-jTpVWm > .sc-epnzzT').should('have.class', 'sc-epnzzT hAFALm'); 
    });


  });