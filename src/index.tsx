import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";
import defaultTheme from "./styles/defaultTheme";
import App from "./App";
import RootProvider from "../src/hook/index";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <RootProvider>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
    </RootProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
