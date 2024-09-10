// example.cy.js

describe('API with cypress, POST', () => {
    
    it('POST al endpoint', () => {
        cy.request('POST','https://jsonplaceholder.typicode.com/posts',{
            userId: 101,
            id: 101,
            title: 'Mi pelicula',
            body: 'una buena pelicula'
        }).then((respuesta) => {
            expect(respuesta.body).to.have.property('title','Mi pelicula');
          })
    });


})