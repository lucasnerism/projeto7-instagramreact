import React from "react";
import reactDom from "react-dom/client";
import App from "./components/App";

const root = reactDom.createRoot(document.querySelector(".root"));

root.render(
  <App />
);