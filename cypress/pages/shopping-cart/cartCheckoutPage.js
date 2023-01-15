import footerPage from "../shared/footerPage";
class CartCheckoutOverviewPage {
  elements = {
    firstnameInput: () => cy.get("[data-test='firstName']"),
    lastnameInput: () => cy.get("[data-test='lastName']"),
    postalCodeInput: () => cy.get("[data-test='postalCode']"),
    errorMessage: () => cy.get(".error-message-container [data-test='error']"),
  };

  completeCheckoutInformation(user) {
    this.elements.firstnameInput().type(user.firstname);
    this.elements.lastnameInput().type(user.lastname);
    this.elements.postalCodeInput().type(user.postalCode);
  }

  clickOnContinue() {
    footerPage.elements.cartContinueButton().should("be.enabled").click();
  }
}

module.exports = new CartCheckoutOverviewPage();
