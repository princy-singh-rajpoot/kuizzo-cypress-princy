describe("Kuizzo Course Creation", () => {
  before(() => {
    cy.login(); // Use the custom command to login once before tests
  });

  it("Creates a course with subjects and topics", () => {
    cy.get(
      "div.flex.justify-center.items-center.py-\\[1\\.62rem\\].gap-\\[0\\.81rem\\] svg"
    )
      .last()
      .click();
    cy.contains("div", "Create New Courses").click();

    cy.get('input[placeholder="Enter Course Name"]').type("Automation Testing");
    cy.get('textarea[placeholder="Enter Course Description"]').type(
      "This is Automation Testing description that includes various testing subjects like selenium,python,javascript,testng,cypress,playwright etc"
    );
    cy.get('textarea[placeholder="Enter Course Objectives"]').type(
      "the objective of this course is to provide basic understanding of automation testing."
    );
    cy.get('input[name="youtubeUrl"]').type(
      "https://youtu.be/qR20KF7wxSU?si=ENCYniNGZEoYzIq3"
    );

    // Place this file in cypress/fixtures
    const fileName = "Automation Testing.pdf";
    cy.get('input[type="file"]').attachFile(fileName, { force: true });

    // submit
    cy.get('button[type="submit"]').click();
  });
});
