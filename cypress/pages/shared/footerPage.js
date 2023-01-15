class FooterPage {
  elements = {
    cartContinueShoppingButton: () => cy.get("[data-test='continue-shopping']"),
    cartCheckoutButton: () => cy.get("[data-test='checkout']"),
    cartContinueButton: () => cy.get("[data-test='continue']"),
    cartCompletePurchase: () => cy.get("[data-test='finish']"),
  };
}

module.exports = new FooterPage();
