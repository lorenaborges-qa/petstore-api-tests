Testes de API na Petstore (Swagger)

Este repositório contém a implementação de testes automatizados para a [Petstore API](https://petstore.swagger.io/) utilizando **Cypress** com foco em chamadas HTTP (`cy.request`). O objetivo é validar endpoints e regras de negócio relacionadas a pedidos e pets.

---

Descrição do Desafio

Implementar os seguintes casos de teste:

1. Criar novo pedido de pet (POST `/store/order`)
2. Buscar pet inexistente (GET `/pet/{petId}`)
3. Atualizar dados de pet existente (PUT `/pet`)
4. Buscar pets com status “pending” (GET `/pet/findByStatus`)

---

Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/) (para gerar dados aleatórios)
- JavaScript (ES6+)

---

Como rodar os testes localmente

#1. Clone este repositório:

```bash
git clone https://github.com/lorenaborges-qa/petstore-api-tests.git
cd petstore-api-tests

#2. Instale as dependências:
npm install

#3. Execute os testes no modo headless:
npx cypress run

#Ou abra a interface interativa do Cypress:
npx cypress open

---


Estratégia de Testes
Validações feitas:

Status de resposta (statusCode)

Estrutura da resposta (body)

Regras de negócio (como status dos pets ou se o pedido foi criado com sucesso)

Massa de dados:

Dados gerados manualmente ou com Faker, quando aplicável

IDs de pets e pedidos utilizados para validar diferentes cenários

Contato Lorena Borges
Email: lorenaborges11@hotmail.com
GitHub: lorenaborges-qa