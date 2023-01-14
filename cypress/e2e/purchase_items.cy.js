/// <reference types="Cypress" />

describe("The user makes purchases of items through the Saucedemo App", () => {
  it("should log in successfully", () => {
    cy.visit("/");
    cy.get("[data-test='username']").should("be.visible").type("standard_user");
    cy.get("[data-test='password']").should("be.visible").type("secret_sauce");
    cy.get("[data-test='login-button']").should("be.enabled").click();
    cy.get("span[class='title']").should("have.text", "Products");
  });
});
