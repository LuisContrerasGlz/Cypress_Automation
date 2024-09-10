describe('API with cypress, PUT', () => {
    
    it('PUT al endpoint', () => {
        cy.request('PUT','https://jsonplaceholder.typicode.com/posts/2',{
            title: 'Mi pelicula',
            body: 'una buena pelicula'
        }).then((respuesta) => {
            expect(respuesta.body).to.have.property('title','Mi pelicula');
          })
    });


})