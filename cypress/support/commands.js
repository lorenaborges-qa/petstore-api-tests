import { generateOrderData, generatePetData } from "./dataGenerator";

Cypress.Commands.add('criarPet', (overrides = {}) => {
    const pet = generatePetData(overrides);

    return cy.request({
        method: 'POST',
        url: `/pet`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: pet
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys(
            'id',
            'category',
            'name',
            'photoUrls',
            'tags',
            'status'
        );
        expect(response.body.id).to.be.a('number');
        expect(response.body.name).to.be.a('string');
        expect(response.body.status).to.be.eq('available');
        Cypress.env('petId', response.body.id)
    })
})
Cypress.Commands.add('criarPedido', (overrides = {}) => {
    const pedido = generateOrderData(overrides);

    return cy.request({
        method: 'POST',
        url: `/store/order`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: pedido
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.all.keys(
            "id",
            "petId",
            "quantity",
            "shipDate",
            "status",
            "complete"
        )
    })

})