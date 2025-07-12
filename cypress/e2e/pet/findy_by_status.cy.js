describe('Buscar PETS por status', () => {
    ['pending', 'sold'].forEach((status) => {
        it(`deve retornar PETs com o status "${status}"`, () => {
            cy.request({
                method: 'GET',
                url: '/pet/findByStatus',
                qs: { status },
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');

                if (response.body.length > 0) {
                    response.body.forEach((pet) => {
                        expect(pet.status).to.eq(status);
                    });
                }
            });
        });
    });
})