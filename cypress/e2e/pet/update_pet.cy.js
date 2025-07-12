describe('atualiza pedido', () => [
    it('atualiza o nome e status do pet', () => {
        cy.criarPet().then((pet) => {
            const petAtualizado = {
                ...pet,
                name: "Nome Atualizado",
                status: "sold"
            };
            cy.request({
                method: 'PUT',
                url: '/pet',
                headers: { 'Content-Type': 'application/json' },
                body: petAtualizado
            }).then((res) => {
                expect(res.status).to.eq(200);
                expect(res.body.name).to.eq("Nome Atualizado");
                expect(res.body.status).to.eq("sold");
            })
        })
    })
])