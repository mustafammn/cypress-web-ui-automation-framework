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
