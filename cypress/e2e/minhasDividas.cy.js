describe('Pagina Minhas Dividas', () => {
    it('Deve realizar pagamento por boleto', () => {
        cy.start()
        cy.login()
        cy.pagamentoDaDivida('Banco Fictício S/A')
        cy.metodoPagamento('Boleto bancário (somente à vista)')
        cy.validaOpçõesPix()
        cy.get('#btnGerar').click()
        cy.contains('h2', 'Dados para pagamento').should('be.visible')
        cy.get('#btnPagar').click()
        cy.get('#msgPagamento')
            .should('be.visible')
            .and('have.text', 'Pagamento total do acordo realizado com sucesso! Confirmação enviada para testefeliz@teste.com. (mock)')
    })

    it.only('Deve realizar pagamento por pix em 3x', () => {
        cy.start()
        cy.login()
        cy.pagamentoDaDivida('Banco Fictício S/A')
        cy.metodoPagamento('PIX')
        cy.validaOpçõesPix()
        cy.tipoPagamento('Parcelado')
        cy.parcelas('3x')
        cy.get('#btnGerar').click()
        cy.contains('h2', 'Dados para pagamento').should('be.visible')
        cy.get('#btnPagar').click()
        cy.get('#msgPagamento')
            .should('be.visible')
            .and('have.text', 'Parcela 1/3 paga com sucesso. Saldo devedor aproximado: R$ 2266,67. Confirmação enviada para testefeliz@teste.com. (mock)')
    })

    it('Deve realizar pagamento por pix parcelado', () => {
        cy.start()
        cy.login()
        cy.pagamentoDaDivida('Banco Fictício S/A')

        cy.contains('td', 'Banco Fictício S/A')
        .parents('td')
        .within(() => {
            cy.contains('button', 'Negociar / Pagar').click()
        })


        cy.get()
        cy.metodoPagamento('PIX')
        cy.validaOpçõesPix()
        cy.tipoPagamento('Parcelado')
        cy.parcelas('3x')
        cy.get('#btnGerar').click()
        cy.contains('h2', 'Dados para pagamento').should('be.visible')
        cy.get('#btnPagar').click()
        cy.get('#msgPagamento')
            .should('be.visible')
            .and('have.text', 'Parcela 1/3 paga com sucesso. Saldo devedor aproximado: R$ 2266,67. Confirmação enviada para testefeliz@teste.com. (mock)')
    })

    it('Deve realizar pagamento por pix em 1x Alertas', () => {
        cy.start()
        cy.login()
        cy.pagamentoDaDivida('Banco Fictício S/A')
        cy.metodoPagamento('PIX')
        cy.validaOpçõesPix()
        cy.tipoPagamento('Parcelado')
        cy.parcelas('1x')
        cy.get('#btnGerar').click()
        cy.get('#configErro')
            .should('have.text', 'Selecione uma quantidade de parcelas entre 2 e 10.')
        cy.contains('h2', 'Dados para pagamento').should('be.visible')
        cy.get('#btnPagar').click()
        cy.get('#msgPagamento')
            .should('be.visible')
            .and('have.text', 'Gere primeiro o PIX ou Boleto antes de pagar.')
        cy.contains('Nenhum acordo encontrado.')
    })

})



