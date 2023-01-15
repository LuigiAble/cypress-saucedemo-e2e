class CartCheckoutOverviewPage {
  elements = {
    firstnameInput: () => cy.get("[data-test='firstName']"),
    lastnameInput: () => cy.get("[data-test='lastName']"),
    postalCodeInput: () => cy.get("[data-test='postalCode']"),
    continueButton: () => cy.get("[data-test='continue']"),
    errorMessage: () => cy.get(".error-message-container [data-test='error']"),
  };

  completeCheckoutInformation(firstname, lastname, postalCode) {
    this.elements.firstnameInput().type(firstname);
    this.elements.lastnameInput().type(lastname);
    this.elements.postalCodeInput().type(postalCode);
  }

  clickOnContinue() {
    this.elements.continueButton().should("be.enabled").click();
  }
}

module.exports = new CartCheckoutOverviewPage();
