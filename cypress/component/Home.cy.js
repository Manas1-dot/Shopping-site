import React from "react";
import { mount } from "cypress/react";
import Home from "../../src/components/Home/Home";
import styles from "../../src/components/Home/Home.module.css";

describe("Home Component", () => {
  beforeEach(() => {
    mount(<Home />);
  });

  it("renders the home page", () => {
    cy.get("div").should("exist");
  });

  it("renders product details correctly", () => {
    cy.contains("Men’s winter jacket").should("be.visible");
    cy.contains("Revamp your style with the latest designer trends").should(
      "be.visible"
    );
    cy.contains("Size & Fit Guide").should("be.visible");
    cy.contains("Height of model: 189 cm. / 6′ 2″ Size 41").should(
      "be.visible"
    );
  });

  it("renders size options correctly", () => {
    const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
    sizeOptions.forEach((size) => {
      cy.contains(size).should("be.visible");
    });
  });

  it("renders color selection options", () => {
    cy.get(`.${styles.colorBody}`).should("exist");
    cy.get(`.${styles.colorLeft}`).should("exist");
    cy.get(`.${styles.colorRight}`).should("exist");
  });

  it("renders Counter component and interacts with it", () => {
    cy.get(`.${styles.minusButon}`).should("exist");
    cy.get(`.${styles.minusButon}`).contains("+").should("exist");

    cy.get(`.${styles.minusButon}`).contains("+").click();
    cy.contains("1").should("be.visible");

    cy.get(`.${styles.minusButon}`).contains("-").click();
    cy.contains("0").should("be.visible");

    cy.get(`.${styles.minusButon}`).contains("-").click();
    cy.contains("0").should("be.visible");
  });

  it("renders the 'Add to Cart' button and interacts with it", () => {
    cy.contains("Add to Cart").should("be.visible");
    cy.contains("Add to Cart").click();
  });
});
