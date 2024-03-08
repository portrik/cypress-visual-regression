describe("Text Example", () => {
  it("Should Match Visually", () => {
    cy.visit("/text");
    cy.contains("WordArt").should("be.visible");

    cy.get("#root").captureElement("text");
  });
});
