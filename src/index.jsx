import React from "react";
import "./styles/color.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
        
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
