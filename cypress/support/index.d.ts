/// <reference types="cypress" />
declare namespace Cypress {
  interface PluginSetupOptions {
    errorThreshold: number;
    failSilently: boolean;
  }
  interface CustomOptions {
    element: string;
  }
  // Have to define these here. Direct import from the plugin leads to ```any```.
  type PluginCommandOptions =
    | Partial<CustomOptions & PluginSetupOptions & ScreenshotOptions>
    | number;

  interface Chainable {
    /**
     * Custom command to capture a whole page for visual regression testing.
     *
     * @param {string} name Screenshot name to use. Will be indexed, example: `example-0.png`
     * @param {PluginCommandOptions | undefined} options Screenshot capture options.
     *
     * @example cy.get('body').capturePage('example', { capture: 'viewport', errorThreshold: 0.05 })
     */
    captureElement: (name: string, options?: PluginCommandOptions) => void;
  }
}
