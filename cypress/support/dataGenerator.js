import { faker } from '@faker-js/faker'

export function generatePetData(overrides = {}) {
    const petId = faker.number.int();//define um id para o credenciamento
    return {
        id: petId,
        category: {
            id: petId,
            name: faker.animal.dog() //define qual será a raça do cachorro
        },
        name: faker.animal.petName(), //define qual será o nome do cachorro
        photoUrls: [
            faker.image.avatar() //define uma imagem para o cachorro 
        ],
        tags: [
            {
                id: petId,
                name: "docil"
            }
        ],
        status: "available",
        ...overrides
    }
}
export function generateOrderData(overrides = {}) {
    return {
        id: faker.number.int(),
        petId: Cypress.env('petId'),
        quantity: faker.number.int({ min: 1, max: 5 }),
        shipDate: new Date().toISOString(),
        status: "placed",
        complete: true,
        ...overrides
    }
}
export function generateUserData(overrides = {}) {
    return {
        id: faker.number.int(),
        username: faker.internet.username(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number({ style: 'national' }),
        userStatus: 0,
        ...overrides
    }
}