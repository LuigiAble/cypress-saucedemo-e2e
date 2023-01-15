Cypress.Commands.add("loginViaUi", (user) => {
  cy.session(
    user,
    () => {
      cy.visit("/");
      cy.title().should("eq", "Swag Labs");
      cy.get("[data-test='username']").type(user.username);
      cy.get("[data-test='password']").type(user.password);
      cy.get("[data-test='login-button']").should("be.enabled").click();
    },
    {
      validate: () => {
        cy.visit("/inventory.html", { failOnStatusCode: false });
        cy.getCookie("session-username").should("exist");
      },
    }
  );
});
