describe("Static Example", () => {
  it("Should Match Visually", () => {
    cy.visit("/");
    cy.contains("A Fantastic Static Website").should("be.visible");

    cy.get("#root").captureElement("static");
  });
});
