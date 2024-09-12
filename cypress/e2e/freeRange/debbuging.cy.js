describe('Home de freeRangeTesters', () => {
    beforeEach('Visits the Free Range Testers website and checks the title', () => {
        // Visita la página web
        cy.visit('https://www.freerangetesters.com');
    });
    
    it('navigate the page', () => {
      // Verifica que el título de la página sea correcto
      cy.title().should('include', 'Free Range Testers');
      cy.log('recursos') 
      cy.get('[data-testid="header-container"] > .sc-erSfwj > .sc-cHqXqK > :nth-child(2) > .sc-iuUfFv')
      .should('be.visible')
      .click()
      cy.contains('Recursos').should('be.visible')
      cy.log('udemy')
      cy.get('[data-testid="header-container"] > .sc-erSfwj > .sc-cHqXqK > :nth-child(5) > .sc-iuUfFv')
      .should('be.visible')
      .click();
      cy.title().should('include', 'Udemy');
      cy.log('mentoria') 
      cy.get('#page_header > div > section > div > header > nav > ul > li:nth-child(4) > a').click()
      cy.contains('Mentoría').should('be.visible')
      cy.log('acceder')
      cy.xpath("//a[@class='sc-iuUfFv iuyVSc sc-eUlrpB sc-ljhlHD dlNFXk hRMjHJ'][normalize-space()='Blog']").click()
      cy.contains('Acceder').click()
      cy.title().should('include', 'Acceder');
    });


  });
  