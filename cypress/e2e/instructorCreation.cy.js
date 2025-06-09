describe("Kuizzo Instructor Creation", () => {
  let userData;

  before(() => {
    cy.fixture('user').then((data) => {
      userData = data;
    });
    cy.login();
  });

  it("Creates a new instructor", () => {
    cy.createInstructor(userData);
  });
});
