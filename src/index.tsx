import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { results } from "./data";
import { getImages } from "./data";

const rootElement = document.getElementById("root");
if (rootElement === null) throw new Error("No element with id 'root'");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App getImages={getImages} results={results} />
  </React.StrictMode>
);
