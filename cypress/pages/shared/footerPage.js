class FooterPage {
  elements = {
    cartContinueShoppingButton: () => cy.getByDataTestId("continue-shopping"),
    cartCheckoutButton: () => cy.getByDataTestId("checkout"),
    cartContinueButton: () => cy.getByDataTestId("continue"),
    cartCompletePurchase: () => cy.getByDataTestId("finish"),
  };
}

module.exports = new FooterPage();
