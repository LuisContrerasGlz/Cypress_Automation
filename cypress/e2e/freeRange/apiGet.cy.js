describe('API with cypress, GET', () => {
    
    it('GET al endpoint', () => {
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1').then((respuesta) => {
            expect(respuesta.body).to.have.property('title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
          })
    });
})