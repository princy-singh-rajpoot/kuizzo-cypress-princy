describe("Kuizzo Institution Flow", () => {
  it("Logs in and performs course and teacher setup", () => {
    // Step 1: Visit Homepage
    cy.visit("https://www.kuizzo.com/signin");

    // Step 2: Click "Login" button
    cy.contains("Login").click();

    // Step 3: Fill login form
    cy.get('input[name="username"]').type("princy1");
    cy.get('input[name="password"]').type("princy1");
    cy.get('button[type="submit"]').click();

    // Step 4: Assert you’re on dashboard
    // cy.url().should("include", "institution-dashboard");
    cy.contains("Institution Dashboard").should("exist");
  });
});
