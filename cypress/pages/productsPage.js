import headerPage from "./shared/headerPage";
class ProductsPage {
  elements = {
    add_item_button: (product) =>
      cy.get(`[data-test='add-to-cart-${product}']`),
    remove_item_button: (product) => cy.get(`[data-test='remove-${product}']`),
    product_details: () => cy.get("#inventory_container .inventory_item"),
  };

  selectProducts() {
    this.elements
      .add_item_button("sauce-labs-backpack")
      .should("be.enabled")
      .click();
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
