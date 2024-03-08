describe("Movement Example", () => {
  it("Should Match Visually", () => {
    cy.visit("/movement");
    cy.contains("This Should Get Everyone's Attention").should("be.visible");

    cy.get("#root").captureElement("movement");
  });
});
