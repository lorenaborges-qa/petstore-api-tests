describe('Buscar PET inexistente', () => {
    it('deve retornar 404 para pet inexistente', () => {
        const petIdInvalido = 99999999999;

        cy.request({
            method: 'GET',
            url: `pet/${petIdInvalido}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.message).to.eq("Pet not found");
        })
    })
})