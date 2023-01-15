class CartCheckoutCompletePage {
  elements = {
    completeHeader: () =>
      cy.get(".checkout_complete_container").find(".complete-header"),
    completeSubHeader: () =>
      cy.get(".checkout_complete_container").find(".complete-text"),
    backToProductsButton: () => cy.getByDataTestId("back-to-products"),
  };

  verifyHeaderIsDisplayed(header) {
    this.elements.completeHeader().should("have.text", header);
  }

  verifyMessageIsDisplayed(message) {
    this.elements.completeSubHeader().should("have.text", message);
  }
}

module.exports = new CartCheckoutCompletePage();
