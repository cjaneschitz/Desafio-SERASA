///<reference types="cypress" />

describe('Desafio', () => {
    it('deve poder realizar o cadastro', () => {
    cy.visit('https://bethehero-frontend.netlify.app/register');
    //cy.get - busca um elemento
    //.type - insere um texto
    cy.get('[placeholder="Nome da ONG"]').type('Meus Dogs');
    cy.get('[placeholder="E-mail"]').type('dogs@mail.com');
    cy.get('[placeholder="Whatsapp"]').type('21999999999');
    cy.get('[placeholder="Cidade"]').type('Rio de Janeiro');
    cy.get('[placeholder="UF"]').type('RJ');

    // routing
    // start server com cy.server()
    // criar uma rota com cy.route(
    // atribuir rota a um alias
    // esperar com cy.wait e fazer uma validação
    
    cy.route('POST', '**/ongs',).as('postOng');

    cy.get('[class="button"]').click();

    cy.wait('@postOng').then((xhr) => {
        expect(xhr.status).be.eq(200);
        expect(xhr.response.body).has.property('id');
        expect(xhr.response.body).is.not.null;
    })

    });
  

    it('deve realizar login no sistema', () => {
     
        const createOngId = Cypress.env('createOngId');

        cy.log(createOngId);

        cy.visit('https://bethehero-frontend.netlify.app/');
      //  cy.get('[placeholder="Sua ID"]').type('createOngId');
        cy.get('input').type('createOngId');
      //  cy.get('.button').click();
        cy.get('[class="button"]').click();          
    });
});