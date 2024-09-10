describe('Test API Account Endpoint with Cypress', () => {

    it('Fetch account details and validate the response', () => {
      // Define las opciones de la solicitud
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzhjZmI4YWNiNzA5MjJlZDJjNDVmYzkwM2U5YmNlYSIsIm5iZiI6MTcyNTE1MzU2OS4wNDI0MzcsInN1YiI6IjY0MTg4MTMxYTE0YmVmMDA3YzZiZWQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VEFXz5R4M0fW02kkNUlrkoUMEHgU08J18Wh5-U1JiyA'
        }
      };
  
      // Realiza la solicitud GET a la API
      cy.request({
        method: options.method,
        url: 'https://api.themoviedb.org/3/account/18442630',
        headers: options.headers
      })
      .then((response) => {
        // Valida que el código de estado sea 200
        expect(response.status).to.eq(200);
  
        // Validar que la respuesta contenga ciertas propiedades
        expect(response.body).to.have.property('id', 18442630); 
        expect(response.body).to.have.property('iso_639_1'); 
        expect(response.body).to.have.property('username','conromo64'); 
      });
    });
  });
  