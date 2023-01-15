class CartCheckoutCompletePage {
  elements = {
    // THANK YOU FOR YOUR ORDER
    completeHeader: () =>
      cy.get(".checkout_complete_container .complete-header"),
    // Your order has been dispatched, and will arrive just as fast as the pony can get there!
    completeSubHeader: () =>
      cy.get(".checkout_complete_container .complete-text"),
    backToProductsButton: () => cy.get("[data-test='back-to-products']"),
  };

  verifyThankyouHeaderIsDisplayed(header) {
    this.elements.completeHeader().should("have.text", header);
  }

  verifyThankyouMessageIsDisplayed(message) {
    this.elements.completeSubHeader().should("have.text", message);
  }
}

module.exports = new CartCheckoutCompletePage();
