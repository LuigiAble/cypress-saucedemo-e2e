class CartCheckoutOverviewPage {
  elements = {
    subtotalLabel: () => cy.get(".summary_info .summary_subtotal_label"),
    taxLabel: () => cy.get(".summary_info .summary_tax_label"),
    totalLabel: () => cy.get(".summary_info .summary_total_label"),
    finishButton: () => cy.get("[data-test='finish']"),
  };

  clickOnFinish() {
    this.elements.finishButton().should("be.enabled").click();
  }
}

module.exports = new CartCheckoutOverviewPage();
