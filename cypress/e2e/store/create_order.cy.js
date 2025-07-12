describe('Cadastrar novo pedido de PET com sucesso', () => {
    it('deve criar um PET com sucesso', () => {
        cy.criarPet()
    })
    it('Cria novo pedido de pet com sucesso', () => {
        cy.criarPedido()
    })
})