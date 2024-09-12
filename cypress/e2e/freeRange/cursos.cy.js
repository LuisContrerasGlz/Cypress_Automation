describe('enter the courses section in freeRangeTesters, ', () => {
    beforeEach('Visits the Free Range Testers website and checks the title', () => {
        // Visita la página web
        cy.visit('https://www.freerangetesters.com');
    });
    
    it('valid the title', () => {
      // Verifica que el título de la página sea correcto
      cy.title().should('include', 'Free Range Testers');
    });

    
    it('there are 2 labels with "Ver producto"',() => {
      //cy.get('[data-testid="header-container"] > .sc-erSfwj > .sc-cHqXqK > :nth-child(1) > .sc-iuUfFv').click()
      cy.get(".sc-iuUfFv.iuyVSc.sc-eUlrpB.sc-ljhlHD.dlNFXk.hRMjHJ[href='https://www.freerangetesters.com/cursos']")
      .should('be.visible')
      .click();
      cy.get('[data-testid="container"] > [data-testid="grid"] > :nth-child(2) > .sc-fufdwm > .sc-Rjrgp > .sc-giBObj > .sc-UblHX > .sc-epnzzT').should('have.length',2)
    })

  });
  