describe('Home de freeRangeTesters', () => {
    beforeEach('Visits the Free Range Testers website and checks the title', () => {
        // Visita la página web
        cy.visit('https://www.freerangetesters.com');
    });
    
    it('Valid text in a button', () => {
    cy.wait(2000)
      // Verifica que el boton este visible 
      cy.get('#page_section_65262341 > div > section > div.sc-dntaoT.jyoYKi > div > div:nth-child(3) > section > div.sc-Rjrgp.hrskxD > div > div.sc-UblHX.cCHmJD > div > div > a').should('be.visible'); 
    });


  });