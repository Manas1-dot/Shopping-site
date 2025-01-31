import React from "react";
import { mount } from "cypress/react";
import Counter from "../../src/components/Counter/Counter";

describe("Counter Component", () => {
  beforeEach(() => {
    mount(<Counter />);
  });

  it("renders the counter component", () => {
    cy.get("div").should("exist"); 
  });

  it("displays the initial count as 0", () => {
    cy.contains("0").should("be.visible");
  });

  it("increments the count when + button is clicked", () => {
    cy.get("div").contains("+").click();
    cy.contains("1").should("be.visible");
  });

  it("decrements the count when - button is clicked", () => {
    cy.get("div").contains("+").click();
    cy.get("div").contains("-").click();
    cy.contains("0").should("be.visible");
  });

  it("does not decrement below 0", () => {
    cy.get("div").contains("-").click();
    cy.contains("0").should("be.visible"); 
  });
});
