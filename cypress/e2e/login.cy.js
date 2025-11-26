const loginPage = require("./pages/loginPage");

describe("Login", () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it("Successful login with valid credentials @smoke", () => {
    // Given I am on the login page
    // When I login with valid credentials
    loginPage.login("standard_user", "secret_sauce");
    // Then I should be redirected to the products page
    loginPage.assertOnProductsPage();
  });

  it("Login fails with invalid credentials", () => {
    // Given I am on the login page
    // When I login with invalid credentials
    loginPage.login("invalid_user", "wrong_password");
    // Then I should see an appropriate error message
    loginPage.assertErrorContains(
      "Username and password do not match"
    );
  });
});
