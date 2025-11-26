# Cypress Web UI Automation Framework

A **ready-to-use Cypress Web UI Automation Framework** built for:

- 🔹 Training & learning UI automation
- 🔹 Real project work
- 🔹 Playing around & experimenting
- 🔹 Building a portfolio or interview prep

Tweak a few configs, point it to your app, and you’re ready to go.

---

## 🚀 Tech Stack

- **Cypress 13**
- **JavaScript (Node.js)**
- **Mocha + Chai (built into Cypress)**
- **Page Object Model (POM)**
- **GitHub Actions CI** (headless runs with videos & screenshots)

---

## 📂 Project Structure

```text
cypress-web-ui-automation-framework
 ├── package.json
 ├── cypress.config.js
 ├── cypress
 │   ├── e2e
 │   │    ├── pages
 │   │    │    └── loginPage.js
 │   │    └── login.cy.js
 │   ├── fixtures
 │   └── support
 │        ├── commands.js
 │        └── e2e.js
 └── .github
      └── workflows
           └── cypress-ci.yml
