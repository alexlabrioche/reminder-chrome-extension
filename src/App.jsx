import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import { AppContext } from "./context/AppContext";
import { dark, light } from "./styles/theme";
import GlobalStyle from "./styles/global";

function App() {
  const { showSettings, darkTheme } = useContext(AppContext);
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <div className="app">
        <GlobalStyle />
        <Menu />
        {showSettings ? <Settings /> : <Home />}
      </div>
    </ThemeProvider>
  );
}

export default App;
