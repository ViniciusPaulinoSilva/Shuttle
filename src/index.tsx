import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";
import defaultTheme from "./styles/defaultTheme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
