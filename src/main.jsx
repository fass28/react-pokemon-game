import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { PokemonApp } from "./App";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <PokemonApp />
  </HashRouter>
);
