import "cypress-file-upload";

Cypress.Commands.add("login", (username = "princy1", password = "princy1") => {
  cy.visit("https://www.kuizzo.com/signin");
  cy.contains("Login").click();
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add("createCourse", (courseData) => {
  cy.get("div.flex.justify-center.items-center.py-\\[1\\.62rem\\].gap-\\[0\\.81rem\\] svg").last().click();
  cy.contains("div", "Create New Courses").click();

  cy.get('input[placeholder="Enter Course Name"]').type(courseData.courseName);
  cy.get('textarea[placeholder="Enter Course Description"]').type(
    courseData.courseDescription
  );
  cy.get('textarea[placeholder="Enter Course Objectives"]').type(
    courseData.courseObjectives
  );
  cy.get('input[name="youtubeUrl"]').type(courseData.youtubeUrl);
  cy.get('input[type="file"]').attachFile("Automation Testing.pdf", {
    force: true,
  });
  cy.get('button[type="submit"]').click();

  courseData.subjects.forEach((subject, index) => {
    cy.get("div.flex.justify-center.cursor-pointer svg").first().click();
    if (index === 0) {
      cy.get('input[placeholder="Enter Subject Name"]').type(subject.name);
      cy.get('textarea[placeholder="Enter Subject Description"]').type(
        subject.description
      );
    } else {
      cy.get(`input[name="subjects[${index}].subjectName"]`).type(subject.name);
      cy.get(`textarea[name="subjects[${index}].subjectDescription"]`).type(
        subject.description
      );
    }
  });

  // ✅ Click the Next button to reveal the Topics section
  cy.contains("button", "Next").click();

  courseData.topics.forEach((topic, index) => {
    cy.get("div.flex.justify-center.cursor-pointer svg").first().click();
    cy.get(`select[name="topics[${index}].selectedSubject"]`, {
      timeout: 10000,
    })
      .should("be.visible")
      .select(topic.subject);
    cy.get(`input[name="topics[${index}].topicName"]`).type(topic.name);
    cy.get(`textarea[name="topics[${index}].topicDescription"]`).type(
      topic.description
    );
  });

  cy.contains("button", "Publish").click();
});

Cypress.Commands.add("createInstructor", (instructorData) => {
  cy.get(
    "div.flex.justify-center.items-center.py-\\[1\\.62rem\\].gap-\\[0\\.81rem\\] svg"
  )
    .last()
    .click();
  cy.contains("Add Instructors").click();

  cy.get('input[name="instructorName"]').type(instructorData.instructorName);
  cy.get('input[name="email"]').type(instructorData.instructorEmail);

  cy.get("div.relative.flex.items-center.flex-wrap.gap-1.w-full").click();
  cy.contains('div[role="option"]', "Automation Testing").click();

  cy.get('input[name="image"]').attachFile("princy.png", { force: true });
  cy.contains("button", "Add Instructor").click();

  cy.contains("button", "View Instructors", { timeout: 10000 })
    .should("be.visible")
    .click();
});
