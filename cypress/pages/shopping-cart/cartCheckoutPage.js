import footerPage from "../shared/footerPage";
class CartCheckoutOverviewPage {
  elements = {
    firstnameInput: () => cy.getByDataTestId("firstName"),
    lastnameInput: () => cy.getByDataTestId("lastName"),
    postalCodeInput: () => cy.getByDataTestId("postalCode"),
    errorMessage: () => cy.getByDataTestId("error"),
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
