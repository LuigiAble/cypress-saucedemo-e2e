class HeaderPage {
  elements = {
    headerTitle: () => cy.get(".header_secondary_container .title"),
    shoppingCartSort: () => cy.get("[data-test='product_sort_container']"),
    shoppingCartBadge: () =>
      cy.get("#shopping_cart_container .shopping_cart_link"),
  };

  verifyTitleIsDisplayed(title) {
    this.elements.headerTitle().should("have.text", title);
  }
}

module.exports = new HeaderPage();
