class FooterPage {
  elements = {
    c: () => cy.get("[data-test='continue-shopping']"), // my cart
    cartCheckoutButton: () => cy.get("[data-test='checkout']"), // my cart
    // data-test="cancel" -- my info
    // data-test="continue" -- my info

    // data-test="cancel"
    // data-test="finish"
  };
}

module.exports = new FooterPage();
