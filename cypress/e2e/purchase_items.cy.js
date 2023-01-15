/// <reference types="Cypress" />

describe("The user makes purchases of items through the Saucedemo App", () => {
  it("should log in successfully", () => {
    cy.visit("/");
    cy.get("[data-test='username']").should("be.visible").type("standard_user");
    cy.get("[data-test='password']").should("be.visible").type("secret_sauce");
    cy.get("[data-test='login-button']").should("be.enabled").click();
    cy.get("span[class='title']").should("have.text", "Products");

    // 1. List of items
    cy.get("[data-test='product_sort_container']").select(
      "Price (high to low)"
    );
    cy.get(".inventory_item #item_4_img_link img").should("be.visible");
    cy.get("[data-test='add-to-cart-sauce-labs-backpack']")
      // .should("be.enabled")
      .click();
    cy.get(".shopping_cart_link")
      .within((qnt) => {
        cy.wrap(qnt).should("have.text", 1);
      })
      .click();

    // 2. User Cart
    cy.get(".header_secondary_container .title").should(
      "have.text",
      "Your Cart"
    );
    cy.get(".cart_item").should("be.visible");
    cy.get("[data-test='checkout']").should("be.enabled").click();

    // 3. User Checkout
    cy.get(".header_secondary_container .title").should(
      "have.text",
      "Checkout: Your Information"
    );

    cy.get("[data-test='firstName']").type("Test");
    cy.get("[data-test='lastName']").type("Ing");
    cy.get("[data-test='postalCode']").type("12312");
    cy.get("[data-test='continue']").should("be.enabled").click();

    // 4. User Checkout Overview
    cy.get(".header_secondary_container .title").should(
      "have.text",
      "Checkout: Overview"
    );
    cy.get("[data-test='finish']").should("be.enabled").click();

    // 5. User Checkout Complete
    cy.get(".header_secondary_container .title").should(
      "have.text",
      "Checkout: Complete!"
    );
    cy.get(".checkout_complete_container .complete-header").should(
      "have.text",
      "THANK YOU FOR YOUR ORDER"
    );
    cy.get(".checkout_complete_container .complete-text").should(
      "have.text",
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });
});
