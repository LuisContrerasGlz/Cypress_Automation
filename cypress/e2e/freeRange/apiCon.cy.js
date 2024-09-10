// example.cy.js

describe('API with cypress, connection', () => {
    
    it('post to the endpoint', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts'
          }).then((respuesta) => {
            expect(respuesta.status).to.eq(200);
          })
    });

    it('el endpoint "posts" tiene 100 elementos', () => {
      cy.request({
          url: 'https://jsonplaceholder.typicode.com/posts'
        }).its('body')
        .should('have.length',100)
    });

    it('el primer post tiene el titulo "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"', () => {
      cy.request({
          url: 'https://jsonplaceholder.typicode.com/posts/1'
        }).its('body')
        .should('have.property','title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    });

})
