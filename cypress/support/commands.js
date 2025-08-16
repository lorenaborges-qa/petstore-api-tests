import { generateOrderData, generatePetData, generateUserData } from "./dataGenerator";

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
Cypress.Commands.add('criarUser', (overrides = {}) => {
    const createdUser = generateUserData(overrides);
    return cy.request({
        method: 'POST',
        url: `/user`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: createdUser
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.type).to.eq("unknown");
        expect(response.body).to.have.all.keys(
            "code",
            "type",
            "message"
        );
        return { response, createdUser };
    })
})
Cypress.Commands.add('getUserWithRetry', (username, retries = 3, delay = 500) => {
    function attemptGet(remainingRetries) {
        return cy.request({
            method: 'GET',
            url: `/user/${username}`,
            failOnStatusCode: false, // evita falha automática em 404
        }).then((res) => {
            if (res.status === 200) {
                // Usuário encontrado
                expect(res.body).to.have.property('username', username)
                return res
            } else if (remainingRetries > 0) {
                // Tenta de novo após um pequeno delay
                cy.wait(delay)
                return attemptGet(remainingRetries - 1)
            } else {
                // Falhou mesmo após retries
                throw new Error(`Usuário ${username} não encontrado após ${retries} tentativas`)
            }
        })
    }
    return attemptGet(retries)
})
