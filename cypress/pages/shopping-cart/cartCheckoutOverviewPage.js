import { calculateSubTotal } from "../../../utils/formatters";
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

  verifySummaryInfoIsCorrectlyDisplayed() {
    cy.get(".summary_subtotal_label").should(
      "contain.text",
      `Item total: $${calculateSubTotal().subtotal}`
    );
    cy.get(".summary_tax_label").should(
      "contain.text",
      `Tax: $${calculateSubTotal().taxes}`
    );
    cy.get(".summary_total_label").should(
      "contain.text",
      `Total: $${calculateSubTotal().total}`
    );
  }
}

module.exports = new CartCheckoutOverviewPage();
