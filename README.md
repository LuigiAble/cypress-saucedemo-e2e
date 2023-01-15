# Cypress E2E Testing and Postman API Testing

[![Cypress E2E tests](https://github.com/LuigiAble/cypress-saucedemo-e2e/actions/workflows/main_e2e.yml/badge.svg)](https://github.com/LuigiAble/cypress-saucedemo-e2e/actions/workflows/main_e2e.yml)

[![Postman API Tests](https://github.com/LuigiAble/cypress-saucedemo-e2e/actions/workflows/main_api.yml/badge.svg)](https://github.com/LuigiAble/cypress-saucedemo-e2e/actions/workflows/main_api.yml)

## Getting Started

This project implements some tests to the following applications.

We implemented e2e tests using Cypress to verify the purchase workflow in https://www.saucedemo.com/

On the other hand, we implemented API tests to verify https://gorest.co.in/public/v2/posts [GET, POST, PUT, DELETE] endpoint that lives in https://gorest.co.in/

## Prerequisites 🛠

The only requirement for this project is to have Node.js version 14 or above installed on your machine.

Additionally, newman may be installed globally

```sh
npm install -g newman
```

## Instalation 🔌

Before starting to run the test:

1. Clone the repo
   ```sh
   git clone https://github.com/LuigiAble/cypress-saucedemo-e2e.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- RUNNING TESTS --> 🚀

## Running tests 🚀

In order to run the tests, you can use the following commands:

1. Cypress e2e Tests

`Using Cypress Dasboard`

```sh
npm test
```

`Using Headless Mode`

```sh
npm run cy:e2e:chrome
```

2. Postman API Tests

`Using Postman`

Download Postman from https://www.postman.com/downloads/ and import the postman collection and environment located in `api/collection`

`Using Newman`

```sh
newman run Resources.postman_collection.json -e Gorest.co.postman_environment.json
```

## Reporting

This project uses `cypress-mochawesome-reporter` that can be found in `cypress/reports` and in `Github jobs artifacts`.
