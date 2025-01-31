import React from "react";
import { mount } from "cypress/react";
import ImageSection from "../../src/components/ImageSection/ImageSection";
import styles from "../../src/components/ImageSection/ImageSection.module.css";

describe("ImageSection Component", () => {
  beforeEach(() => {
    mount(<ImageSection />);
  });

  it("renders the ImageSection component", () => {
    cy.get("div").should("exist");
  });

  it("renders the correct number of imageInner divs", () => {
    cy.get(`.${styles.imageInner}`).should("have.length", 4);
  });

  it("renders the imageHead div", () => {
    cy.get(`.${styles.imageHead}`).should("exist");
  });
});
