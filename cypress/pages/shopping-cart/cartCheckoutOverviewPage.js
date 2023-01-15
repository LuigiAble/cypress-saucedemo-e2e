import { calculateSubTotal } from "../../../utils/formatters";
import footerPage from "../shared/footerPage";
class CartCheckoutOverviewPage {
  elements = {
    subtotalLabel: () =>
      cy.get(".summary_info").find(".summary_subtotal_label"),
    taxLabel: () => cy.get(".summary_info").find(".summary_tax_label"),
    totalLabel: () => cy.get(".summary_info").find(".summary_total_label"),
  };

  clickOnFinish() {
    footerPage.elements.cartCompletePurchase().should("be.enabled").click();
  }

  verifySummaryInfoIsCorrectlyDisplayed() {
    this.elements
      .subtotalLabel()
      .should("contain.text", `Item total: $${calculateSubTotal().subtotal}`);

    this.elements
      .taxLabel()
      .should("contain.text", `Tax: $${calculateSubTotal().taxes}`);

    this.elements
      .totalLabel()
      .should("contain.text", `Total: $${calculateSubTotal().total}`);
  }
}

module.exports = new CartCheckoutOverviewPage();
