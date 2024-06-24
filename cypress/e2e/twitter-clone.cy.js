import { errorMessages } from "../../src/pages/LoginForm";

describe("Twitter-login", () => {
  describe("Error Mesages", () => {
    it("email input throws error for email", () => {
      //Arrange
      cy.visit("http://localhost:5173");
      //Act
      cy.get('[data-cy="email-input"]').type("esr@");
      //Assert
      cy.contains(errorMessages.email);
    });

    it("password input throws error for password", () => {
      //Arrange
      cy.visit("http://localhost:5173");
      //Act
      cy.get('[data-cy="password-input"]').type("asd123");
      //Assert
      cy.contains(errorMessages.password);
    });

    it("button is disabled for unvalidaded inputs", () => {
      //Arrange
      cy.visit("http://localhost:5173");
      //Act
      //cy.get('[data-cy="email-input"]').type("esr@");
      //Assert
      cy.get('[data-cy="submit-button"]').should("be.disabled");
    });
  });
  describe("Form validated", () => {
    it("Button enabled for validated inputs", () => {
      //Arrange
      cy.visit("http://localhost:5173");
      //Act
      cy.get('[data-cy="email-input"]').type("esra@gmail.com");
      cy.get('[data-cy="password-input"]').type("asdE***11");
      //Assert
      cy.get('[data-cy="submit-button"]').should("not.be.disabled");
    });

    it("Submit form on validated inputs", () => {
      //Arrange
      cy.visit("http://localhost:5173");
      //Act
      cy.get('[data-cy="email-input"]').type("esra@gmail.com");
      cy.get('[data-cy="password-input"]').type("asdE***11");
      cy.get('[data-cy="submit-button"]').click();
      //Assert
    });
  });
});
