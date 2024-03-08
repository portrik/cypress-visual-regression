/* eslint-disable @typescript-eslint/naming-convention */
import { env } from "node:process";

import { defineConfig } from "cypress";
import { configureVisualRegression } from "cypress-visual-regression/dist/plugin";

function loadEnvironmentNumber(key: string, defaultValue: number): number {
  const fromVariable = Number(env[key]);

  return Number.isNaN(fromVariable) ? defaultValue : fromVariable;
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const VIEWPORT_WIDTH = loadEnvironmentNumber("VIEWPORT_WIDTH", 1920);

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const VIEWPORT_HEIGHT = loadEnvironmentNumber("VIEWPORT_HEIGHT", 1080);

const configuration = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",

    env: {
      visualRegressionBaseDirectory: "cypress/snapshot/base",
      visualRegressionDiffDirectory: "cypress/snapshot/diff",
      visualRegressionGenerateDiff: "always",
      visualRegressionType: "regression",
    },

    screenshotsFolder: "./cypress/snapshot/actual",

    setupNodeEvents(on) {
      on("before:browser:launch", (browser, launchOptions) => {
        const finalOptions = { ...launchOptions };

        if (browser.name === "electron" && browser.isHeadless) {
          finalOptions.preferences["width"] = VIEWPORT_WIDTH;
          finalOptions.preferences["height"] = VIEWPORT_HEIGHT;
        }

        return finalOptions;
      });

      configureVisualRegression(on);
    },

    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: VIEWPORT_HEIGHT,
    viewportWidth: VIEWPORT_WIDTH,
  },
});

export default configuration;
