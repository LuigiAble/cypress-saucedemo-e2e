import { replaceStringWithDashes } from "../../utils/formatters";
import headerPage from "./shared/headerPage";
class ProductsPage {
  elements = {
    add_item_button: (product) =>
      cy.getByDataTestId(`'add-to-cart-${product}'`),
    product_details: () =>
      cy.get("#inventory_container").find(".inventory_item"),
  };

  selectProducts(products) {
    cy.wrap(products).each((product) => {
      this.elements
        .product_details()
        .should("contain.text", product.description);
      this.elements
        .add_item_button(replaceStringWithDashes(product.title))
        .should("be.enabled")
        .click();
    });
  }

  sortProductsBy(sortBy) {
    headerPage.elements.shoppingCartSort().select(sortBy);
  }

  verifyCartBadgeItems(quantityOfItems) {
    headerPage.elements
      .shoppingCartBadge()
      .as("CartBadge")
      .then((quantity) => {
        cy.wrap(quantity).should("have.text", quantityOfItems);
      });
  }

  navigateToCartPage() {
    cy.get("@CartBadge").click();
  }
}

module.exports = new ProductsPage();
