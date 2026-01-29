// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('start', () => {
    cy.viewport(1440, 900)
    cy.visit('https://d2k3vwv4trl2mm.cloudfront.net/index.html')
    cy.get('a.btn').click()
})

Cypress.Commands.add('login', () => {
    cy.get('#email').type('testefeliz@teste.com')
    cy.get('#senha').type('123456')
    cy.get('#btnLogin').click()
    cy.contains('Login realizado com sucesso!')
})


Cypress.Commands.add('pagamentoDaDivida', (descricao,) => {
    cy.contains('td', descricao)
        .parents('tr')  
        .within(() => {
            cy.contains('button', 'Negociar / Pagar').click()
        })
})

Cypress.Commands.add('metodoPagamento', (pagamento) => {
    cy.wrap(pagamento).as('paga')
    
    cy.contains('label', pagamento)
        .find('input')
        .click()
        .should('be.checked')
})

Cypress.Commands.add('validaOpçõesPix', () => {
    cy.get('@paga').then((pagamento)=>{
        cy.contains('label', 'Tipo de pagamento PIX')
            .should( pagamento === 'PIX' ? 'be.visible': 'not.be.visible')
    }) 
})

Cypress.Commands.add('tipoPagamento', (tipo) => {
    cy.contains('label', tipo)
        .find('input')
        .click()
        .should('be.checked')

})

Cypress.Commands.add('parcelas', (quantidade) => {
    cy.wrap(quantidade).as('qtd')
    cy.contains('label', 'Quantidade de parcelas (PIX até 10x)')
        .parent()
        .find('select')
        .select(quantidade)
})

