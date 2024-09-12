describe('Home de freeRangeTesters', () => {
    beforeEach('Visits the Free Range Testers website and checks the title', () => {
        // Visita la página web
        cy.visit('https://www.freerangetesters.com');
    });
    
    it('navigate the page', () => {
      //acceder
      cy.xpath("//a[@class='sc-iuUfFv iuyVSc sc-eUlrpB sc-ljhlHD dlNFXk hRMjHJ'][normalize-space()='Blog']").click()
      cy.contains('Acceder').click()
      cy.title().should('include', 'Acceder');
      cy.get('#email').type('usuario@gmail.com')
      cy.get('#password').type('password')
      cy.get('.btn').click()
    });


  });
  