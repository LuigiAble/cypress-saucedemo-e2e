class HeaderPage {
  elements = {
    headerTitle: () => cy.get(".header_secondary_container").find(".title"),
    shoppingCartSort: () => cy.getByDataTestId("product_sort_container"),
    shoppingCartBadge: () =>
      cy.get("#shopping_cart_container").find(".shopping_cart_link"),
  };

  verifyTitleIsDisplayed(title) {
    this.elements.headerTitle().should("have.text", title);
  }
}

module.exports = new HeaderPage();
