import './commands';
import 'cypress-file-upload';

Cypress.Commands.add("login", () => {
  cy.visit("https://www.kuizzo.com/signin");
  cy.contains("Login").click();
  cy.get('input[name="username"]').type("princy1");
  cy.get('input[name="password"]').type("princy1");
  cy.get('button[type="submit"]').click();
//   cy.contains("Institution Dashboard").should("exist");
});
