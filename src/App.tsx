import React from "react";
import "./index.css";
import "./styles/global.css";
import "./App.css";
import {MemoryRouter as Router} from "react-router-dom";
import Routes from "./routes";

import BottomTab from "./components/bottomTab/bottomTab";
import HeaderLogged from "./components/headerLogged/headerLogged";
import { useUtils } from "./hook/utils";

function App() {
  const {showHeader} = useUtils()
  return (
    <>
      <Router>
        <div className="App">
          {showHeader && <HeaderLogged />}
          <Routes />
          {showHeader && <BottomTab />}
        </div>
      </Router>
    </>
  );
}

export default App;
