import { replaceStringWithDashes } from "../../../utils/formatters";
import footerPage from "../shared/footerPage";
class CartPage {
  elements = {
    cartAddedItem: () => cy.get("#cart_contents_container").find(".cart_item"),
    remove_item_button: (product) => cy.getByDataTestId(`'remove-${product}'`),
  };

  getProductsToBeRemoved = (products) => {
    return products.filter((p) => p.status === "removed");
  };

  updateCartOfItems(products) {
    const productsToRemoveFromCart = this.getProductsToBeRemoved(products);
    cy.wrap(productsToRemoveFromCart).each((product) => {
      this.elements
        .remove_item_button(replaceStringWithDashes(product.title))
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
