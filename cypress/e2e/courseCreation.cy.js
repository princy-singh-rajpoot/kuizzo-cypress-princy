describe("Kuizzo Course Creation", () => {
  let courseData;

  before(() => {
    cy.fixture("course").then((data) => {
      courseData = data;
    });
    cy.login(); // custom login command
  });

  it("Creates a new course only if it doesn't already exist", () => {
    // Open sidebar
    cy.get(
      "div.flex.justify-center.items-center.py-\\[1\\.62rem\\].gap-\\[0\\.81rem\\] svg"
    )
      .last()
      .click();

    // Go to Course List
    cy.contains("div", "Course List").should("be.visible").click();

    // Wait for Course List to load
    cy.contains("Course List").parent().find("div");

    // Check if the course exists in the list items
    cy.get("tr").then(($rows) => {
      const courseExists = [...$rows].some((row) => {
        const courseNameElement = row.querySelector(
          "td div.flex.mobile\\:flex-col.mobile\\:flex-wrap.items-center.mobile\\:pl-\\[10px\\].pl-\\[20px\\].pr-5.gap-\\[0\\.5rem\\].mobile\\:justify-center.py-\\[10px\\] > div > p"
        );
        return (
          courseNameElement &&
          courseNameElement.innerText.includes(courseData.courseName)
        );
      });

      if (courseExists) {
        cy.log(`Course already exists: ${courseData.courseName}`);
      } else {
        cy.log(`Creating course: ${courseData.courseName}`);

        // Click hamburger menu again before creating course, if needed
        cy.get(
          "div.flex.justify-center.items-center.py-\\[1\\.62rem\\].gap-\\[0\\.81rem\\] svg"
        )
          .last()
          .click();

        cy.createCourse(courseData);
      }
    });
  });
});
