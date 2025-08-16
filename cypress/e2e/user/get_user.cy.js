describe('Obter usuário', () => {
    it('Deve buscar um usuário existente com retry', () => {
        const username = `user_${Date.now()}`

        cy.criarUser({ username }).then(({ createdUser }) => {
            cy.getUserWithRetry(createdUser.username).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('id', createdUser.id)
                expect(response.body).to.have.property('email', createdUser.email)
            })
        })
    })

    it('Deve retornar erro ao buscar usuário inexistente', () => {
        const username = `naoExiste_${Date.now()}`

        cy.getUserWithRetry(username, 1).then((res) => {
            expect(res.status).to.eq(404)
            expect(res.body.message).to.eq('User not found')
        })
    })
})
