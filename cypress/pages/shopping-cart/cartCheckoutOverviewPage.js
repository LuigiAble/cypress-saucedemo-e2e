import { calculateAmountsToPay } from "../../../utils/formatters";
import footerPage from "../shared/footerPage";
import productsInCart from "../../fixtures/productsInCart.json";
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
    const { subtotal, taxes, total } = calculateAmountsToPay(productsInCart);

    this.elements
      .subtotalLabel()
      .should("contain.text", `Item total: $${subtotal}`);

    this.elements.taxLabel().should("contain.text", `Tax: $${taxes}`);

    this.elements.totalLabel().should("contain.text", `Total: $${total}`);
  }
}

module.exports = new CartCheckoutOverviewPage();
