import "@fontsource/comic-neue";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

function getRootElement() {
    return document.querySelector("#root")
}

const rootElement = getRootElement();

if (rootElement === null) {
  throw new Error("The #root element could not be found!");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
