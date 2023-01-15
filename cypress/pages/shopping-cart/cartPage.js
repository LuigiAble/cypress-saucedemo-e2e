import { replaceStringWithDashes } from "../../../utils/formatters";
import footerPage from "../shared/footerPage";
class CartPage {
  elements = {
    cartAddedItem: () => cy.get("#cart_contents_container .cart_item"),
    remove_item_button: (product) => cy.get(`[data-test='remove-${product}']`), // remove
  };

  updateCartOfItems(products) {
    cy.wrap(products).each((product) => {
      this.elements
        .remove_item_button(replaceStringWithDashes(product))
        .click();
    });
  }

  clickOnCheckout() {
    footerPage.elements.cartCheckoutButton().should("be.enabled").click();
  }

  verifyItemsAddedAreDisplayed(items) {
    this.elements.cartAddedItem().should("have.length", items);
  }
}

module.exports = new CartPage();
