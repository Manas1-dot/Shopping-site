import React from "react";
import { mount } from "cypress/react";
import Header from "../../src/components/Header/Header";

describe("Header Component", () => {
  beforeEach(() => {
    mount(<Header />);
  });

  it("renders the header component", () => {
    cy.get("div").should("exist"); 
  });

  it("renders the navigation menu items", () => {
    const menuItems = ["Ecommerce", "Shop", "Stories", "About"];

    menuItems.forEach((item) => {
      cy.contains(item).should("be.visible");
    });
  });

  it("renders the login button", () => {
    cy.contains("Login").should("be.visible");
  });
});
