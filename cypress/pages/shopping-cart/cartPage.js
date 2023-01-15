import footerPage from "../shared/footerPage";
class CartPage {
  elements = {
    cartQuantityLabel: () =>
      cy.get("#cart_contents_container .cart_quantity_label"),
    cartDescriptionLabel: () =>
      cy.get("#cart_contents_container .cart_desc_label"),
    cartAddedItem: () => cy.get("#cart_contents_container .cart_item"),
    remove_item_button: (product) => cy.get(`[data-test='remove-${product}']`), // remove
  };

  verifyItemsAddedAreDisplayed(items) {
    this.elements.cartAddedItem().should("have.length", items);
  }

  clickOnCheckout() {
    footerPage.elements.cartCheckoutButton().should("be.enabled").click();
  }
}

module.exports = new CartPage();
