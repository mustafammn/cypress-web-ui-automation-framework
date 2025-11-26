# Cypress Web UI Automation Framework

A simple, clean, and professional **Cypress Web UI Automation Framework** built for:

- **Cypress 15.7.0**
- **JavaScript** (Node.js)
- **Page Object Model (POM)**
- **Easy UI test scripts**
- **GitHub Actions-ready**

Ideal for:
- UI automation practice
- Real-world project use
- Training, learning, portfolio, and interview prep
- Extending into a custom test framework

---

## 🚀 Features

- ✨ Latest Cypress (v15.7.0)
- ✨ Page Object Model (POM) architecture
- ✨ Fast & reliable UI test execution
- ✨ Easily configurable for any website (just update `baseUrl`)
- ✨ Headless or interactive test modes
- ✨ Production-ready folder structure
- ✨ CI/CD integration (GitHub Actions included)

---

## 📁 Project Structure

```
cypress-web-ui-automation-framework
├── cypress.config.js
├── package.json
├── cypress
│   ├── e2e
│   │   ├── pages
│   │   │   └── loginPage.js
│   │   └── login.cy.js
│   ├── fixtures
│   └── support
│       ├── commands.js
│       └── e2e.js
├── .github
│   └── workflows
│       └── cypress-ci.yml
└── README.md
```

---

## ⚙️ Configuration

The framework is configured in `cypress.config.js`:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  hideXHR: true,
});
```

**Tip:** Change the `baseUrl` to point to the app you want to test.

---

## 🧱 Page Object Model (POM) Example

`cypress/e2e/pages/loginPage.js`:

```javascript
class LoginPage {
  elements = {
    username: () => cy.get("#user-name"),
    password: () => cy.get("#password"),
    loginButton: () => cy.get("#login-button"),
    errorMessage: () => cy.get('[data-test="error"]'),
    productsTitle: () => cy.get(".title"),
  };

  visit() {
    cy.visit("/");
  }
  login(username, password) {
    this.elements.username().clear().type(username);
    this.elements.password().clear().type(password);
    this.elements.loginButton().click();
  }
  assertOnProductsPage() {
    this.elements.productsTitle()
      .should("be.visible")
      .and("have.text", "Products");
  }
  assertErrorContains(text) {
    this.elements.errorMessage()
      .should("be.visible")
      .and("contain.text", text);
  }
}
module.exports = new LoginPage();
```

---

## 🧪 Sample Test

`cypress/e2e/login.cy.js`:

```javascript
const loginPage = require("./pages/loginPage");

describe("Login Tests", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("Valid Login @smoke", () => {
    loginPage.login("standard_user", "secret_sauce");
    loginPage.assertOnProductsPage();
  });

  it("Invalid Login", () => {
    loginPage.login("invalid_user", "wrong_password");
    loginPage.assertErrorContains("Username and password do not match");
  });
});
```

---

## ▶️ Running Tests

Install dependencies:

```bash
npm install
```

Run tests headlessly:

```bash
npm test
```

Run tests in Cypress GUI:

```bash
npx cypress open
```

---

## 🧩 Extend the Framework

- Add new page objects in `pages/`
- Create more test specs in `e2e/`
- Integrate API and visual tests
- Set up multi-environment configs
- Leverage GitHub Actions for CI

---

## 👨‍💻 Author

**Mustafa Nooristani**  
Senior QA Automation Engineer  

---

## ⭐ Summary

This repo offers a fast & modern Cypress setup that:

- Works out-of-the-box
- Uses best practices and clean structure
- Is easy to extend and customize
- Perfect for both beginners & professionals

Ready to **clone → install → run → automate!**
