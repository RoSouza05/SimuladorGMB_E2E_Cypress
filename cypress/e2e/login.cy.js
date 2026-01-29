describe('Validação do login', () => {
  it('login com sucesso', () => {
    cy.visit('https://d2k3vwv4trl2mm.cloudfront.net/index.html')
    cy.get('a.btn').click()
    cy.get('#email').type('testefeliz@teste.com')
    cy.get('#senha').type('123456')
    cy.get('#btnLogin').click()
    cy.contains('Login realizado com sucesso!')
    cy.contains('Minhas dívidas')
  })

  it('login com falha de autenticação senha incorreta', () => {
    cy.visit('https://d2k3vwv4trl2mm.cloudfront.net/index.html')
    cy.get('a.btn').click()
    cy.get('#email').type('testefeliz@teste.com')
    cy.get('#senha').type('1234567')
    cy.get('#btnLogin').click()
    cy.contains('Usuário ou senha inválidos.')
  })

  it('login com falha de autenticação email incorreto', () => {
    cy.visit('https://d2k3vwv4trl2mm.cloudfront.net/index.html')
    cy.get('a.btn').click()
    cy.get('#email').type('testefelizes@teste.com')
    cy.get('#senha').type('123456')
    cy.get('#btnLogin').click()
    cy.contains('Usuário ou senha inválidos.')
  })

  it('login com falha de exceção mock', () => {
    cy.visit('https://d2k3vwv4trl2mm.cloudfront.net/index.html')
    cy.get('a.btn').click()
    cy.get('#email').type('loginexcecao@teste.com')
    cy.get('#senha').type('123456')
    cy.get('#btnLogin').click()
    cy.contains('Erro inesperado ao autenticar. Tente novamente mais tarde. (mock exceção)')
  })
})