describe('API with cypress, DELETE', () => {
    
    it('DELETE al endpoint', () => {
        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1',{
            title: 'Mi pelicula',
            body: 'una buena pelicula'
        }).then((respuesta) => {
            expect(respuesta.status).to.eq(200);
          })
    });


})