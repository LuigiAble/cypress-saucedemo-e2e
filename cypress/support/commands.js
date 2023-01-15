Cypress.Commands.add("loginViaUi", (user) => {
  cy.session(
    user,
    () => {
      cy.visit("/");
      cy.title().should("eq", "Swag Labs");
      cy.getByDataTestId("username").type(user.username);
      cy.getByDataTestId("password").type(user.password);
      cy.getByDataTestId("login-button").should("be.enabled").click();
    },
    {
      validate: () => {
        cy.visit("/inventory.html", { failOnStatusCode: false });
        cy.getCookie("session-username").should("exist");
      },
    }
  );
});

Cypress.Commands.add("getByDataTestId", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add("logout", () => {
  cy.clearCookie("session-username");
  cy.visit("/");
  cy.getCookie("session-username").should("not.exist");
});
