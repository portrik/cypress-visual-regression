/* eslint-disable @typescript-eslint/no-magic-numbers */
function getScreenshotIndex(position: number, height: number): number {
  // eslint-disable-next-line total-functions/no-partial-division
  return Math.floor(position / (height + 1));
}

export function addCaptureElementCommand(): void {
  Cypress.Commands.add(
    "captureElement",
    { prevSubject: "element" },
    (subject, name, options) => {
      const elementHeight = subject.innerHeight() ?? 0;
      const viewportHeight = Cypress.config("viewportHeight");
      const screenshotOptions = options ?? {
        capture: "viewport",
        errorThreshold: 0.01,
      };

      assert(elementHeight > 0, "The element has no height is 0!");

      let position = viewportHeight;

      for (; position < elementHeight; position += viewportHeight) {
        cy.wait(200);
        cy.compareSnapshot(
          `${name}-${getScreenshotIndex(position, viewportHeight)}`,
          screenshotOptions,
        );
        cy.scrollTo(0, position);
      }

      cy.compareSnapshot(
        `${name}-${getScreenshotIndex(position, viewportHeight)}`,
        screenshotOptions,
      );
    },
  );
}

export function addMotionOverrideForScreenshots(): void {
  Cypress.Commands.overwrite(
    "compareSnapshot",
    (originalFunction, ...originalArguments) =>
      cy
        .get("#root")
        // eslint-disable-next-line promise/prefer-await-to-then
        .then(
          (app) =>
            new Cypress.Promise((resolve) => {
              setTimeout(() => {
                app.find(".has-motion").css("visibility", "hidden");
                resolve();
              }, 300);
            }),
        ) // @ts-expect-error Cypress typing shenanigans :(
        // eslint-disable-next-line max-len
        // eslint-disable-next-line promise/prefer-await-to-then, @typescript-eslint/no-unsafe-return
        .then(async () => await originalFunction(...originalArguments)),
  );
}
