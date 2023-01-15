import footerPage from "../shared/footerPage";
class CartCheckoutOverviewPage {
  elements = {
    subtotalLabel: () => cy.get(".summary_info .summary_subtotal_label"),
    taxLabel: () => cy.get(".summary_info .summary_tax_label"),
    totalLabel: () => cy.get(".summary_info .summary_total_label"),
  };

  clickOnFinish() {
    footerPage.elements.cartCompletePurchase().should("be.enabled").click();
  }
}

module.exports = new CartCheckoutOverviewPage();
