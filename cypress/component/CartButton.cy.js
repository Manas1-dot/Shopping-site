import React from "react";
import { mount } from "cypress/react";
import CommonButton from "../../src/components/Button/CommontButton";

describe("CommonButton Component", () => {
  it("renders with default text when no props are passed", () => {
    mount(<CommonButton />);
    cy.get("div").should("exist");
  });

  it("renders the button with correct text", () => {
    mount(<CommonButton text="Add to Cart" />);
    cy.contains("Add to Cart").should("be.visible");
  });

  it("renders with dynamic text", () => {
    mount(<CommonButton text="Buy Now" />);
    cy.contains("Buy Now").should("be.visible");
  });
});
