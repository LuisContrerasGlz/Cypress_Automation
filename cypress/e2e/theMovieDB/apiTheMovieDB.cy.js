// Describe el grupo de pruebas para la API utilizando Cypress
describe('API with Cypress', () => {

    // Define la clave de la API para las solicitudes de películas
    const movieKey = "d78cfb8acb70922ed2c45fc903e9bcea";
    
    // Define el idioma para las solicitudes
    const language = "es-MX";
    
    // Define la URL base para obtener las películas populares
    const ENDPOINT = "https://api.themoviedb.org/3/movie/popular";
    
    // Define la URL para la autenticación
    const ENDP2 = "https://api.themoviedb.org/3/authentication";
    
    // Define la URL para obtener la lista de favoritos de una cuenta
    const ENDP3 = "https://api.themoviedb.org/3/account/18442630/favorite";

    
    
    // Define los encabezados que incluyen la autorización con un token Bearer
    const headers = {
        'Authorization': '',
        'accept': 'application/json'
    };

    // Define el primer test para la autenticación
    it('Test Authentication', () => {

        // Realiza una solicitud GET a la URL de autenticación con los encabezados definidos
        cy.request({
            method: 'GET',
            url: ENDP2,
            headers: headers
        }).then((response) => {

            // Verifica que el código de estado de la respuesta sea 200 (éxito)
            expect(response.status).to.eq(200);
            
            // Verifica que en el cuerpo de la respuesta exista la propiedad 'success' con valor true
            expect(response.body).to.have.property('success', true);
            
            // Registra en la consola el cuerpo de la respuesta para revisión
            cy.log('Response Authentication:', response.body);
            console.log('-----------------------------Response Data:', response);
        });
    });

    // Define el segundo test para hacer una solicitud a la API de películas
    it('Test can call movie', () => {

        // Realiza una solicitud GET al endpoint de películas con la clave de API y el idioma como parámetros
        cy.request({
            method: 'GET',
            url: `${ENDPOINT}?api_key=${movieKey}&language=${language}`
        }).then((response) => {

            // Verifica que el código de estado de la respuesta sea 200 (éxito)
            expect(response.status).to.eq(200);
            
            // Registra en la consola el cuerpo de la respuesta para revisión
            cy.log('Response Data:', response.body);
        });
    });
});

