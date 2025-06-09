# Kuizzo Cypress Automation

This repository contains Cypress end-to-end test cases written for the Kuizzo platform. The automation covers core functionalities like course creation, instructor assignment, and file uploads.

## 🧪 Tech Stack

- **Cypress** for end-to-end testing
- **JavaScript**
- **cypress-file-upload** plugin

## 📁 Folder Structure
kuizzo-cypress-princy/
│
├── cypress/
│ ├── e2e/ #Test cases
│ │ └── instructorCreation.cy.js
│ ├── fixtures/ #Test data and files
│ │ ├── course.json
│ │ ├── Automation Testing.pdf
│ │ └── princy.png
│ └── support/
│ ├── commands.js #Custom Cypress commands
│ └── e2e.js
│
├── cypress.config.js # Cypress configuration
├── package.json
├── README.md

## 🚀 Setup Instructions

### 1. Clone the repo
git clone https://github.com/princy-singh-rajpoot/kuizzo-cypress-princy.git
    cd kuizzo-cypress-princy
    npm install

### 2. Run Cypress tests - 
    npx cypress open
    # or headless
    npx cypress run

### 3. ✅ Test Coverage
 Login functionality
 Course creation
 File upload (PNG, PDF)
 Instructor assignment

### 4. Fixtures
Ensure your test files (e.g. princy.png, Automation Testing.pdf) are placed inside the cypress/fixtures/ folder.

### 5. Author
Princy Singh
GitHub: @princy-singh-rajpoot