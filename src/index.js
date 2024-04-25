import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "/src/components/App.jsx";
import { results } from "./data";
import { getImages } from "./data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App getImages={getImages} results={results} />
  </React.StrictMode>
);
