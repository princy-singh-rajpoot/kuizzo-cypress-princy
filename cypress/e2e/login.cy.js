describe("Kuizzo Institution Flow", () => {
  it("Logs in and performs course and teacher setup", () => {
    cy.login(); // use custom command
    cy.contains("Overview").should("exist");
  });
});
