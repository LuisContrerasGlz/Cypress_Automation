describe('API with Cypress, INTERCEPTION', () => {

    it('Simula una solicitud GET a /posts con stub', () => {
        const samplePost = [
            {
                "userId": 1000,
                "id": 1000,
                "title": "dato falso 1000",
                "body": "el body del dato falso 1000"
            },
            {
                "userId": 2000,
                "id": 2000,
                "title": "dato falso 2000",
                "body": "el body del dato falso 2000"
            },
        ];

        // Intercepta la solicitud GET y la sustituye con samplePost
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', samplePost).as('getPosts');

        cy.visit('https://jsonplaceholder.typicode.com');

        // Verifica que el enlace esté visible antes de hacer clic
        cy.get('tbody tr:nth-child(1) td:nth-child(2) a:nth-child(1)')
          .should('be.visible')
          .click();

        // Espera a que la página se haya cargado correctamente
        //cy.wait('@getPosts').its('response.statusCode').should('be.within', 200, 299);

        // Verifica el contenido modificado por la solicitud interceptada

    });

    after(() => {
        cy.window().then(win => {
            win.close();
        });
    });
});
