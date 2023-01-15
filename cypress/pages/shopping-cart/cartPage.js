class CartPage {
  elements = {
    cartQuantityLabel: () =>
      cy.get("#cart_contents_container .cart_quantity_label"),
    cartDescriptionLabel: () =>
      cy.get("#cart_contents_container .cart_desc_label"),
    cartAddedItem: () => cy.get("#cart_contents_container .cart_item"),
    remove_item_button: (product) => cy.get(`[data-test='remove-${product}']`), // remove
    cartCheckoutButton: () => cy.get("[data-test='checkout']"),
  };

  verifyItemsAddedAreDisplayed(items) {
    this.elements.cartAddedItem().should("have.length", items);
  }

  clickOnCheckout() {
    this.elements.cartCheckoutButton().should("be.enabled").click();
  }
}

module.exports = new CartPage();
