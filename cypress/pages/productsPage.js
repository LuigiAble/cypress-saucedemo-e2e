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
}

module.exports = new ProductsPage();
