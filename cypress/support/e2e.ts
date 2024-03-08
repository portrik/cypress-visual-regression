/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable unicorn/prevent-abbreviations */

import { addCompareSnapshotCommand } from "cypress-visual-regression/dist/command";

import {
  addCaptureElementCommand,
  addMotionOverrideForScreenshots,
} from "./commands";

addCompareSnapshotCommand();
addCaptureElementCommand();
addMotionOverrideForScreenshots();
