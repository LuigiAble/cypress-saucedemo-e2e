class LoginPage {
  elements = {
    usernameInput: () => cy.get("[data-test='username']"),
    passwordInput: () => cy.get("[data-test='password']"),
    loginButton: () => cy.get("[data-test='login-button']"),
    errorMessage: () => cy.get("[data-test='error']"),
  };

  login(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginButton().should("be.enabled").click();
  }
}

module.exports = new LoginPage();
