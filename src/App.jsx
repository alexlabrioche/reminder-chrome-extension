import React from "react";
import { ThemeProvider } from "styled-components";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import { dark, light } from "./styles/theme";
import GlobalStyle from "./styles/global";
import { useUIContext } from "./features/ui/UIContext";

function App() {
  const { settings, darkTheme } = useUIContext();
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <div className="app">
        <GlobalStyle />
        <Menu />
        {settings ? <Settings /> : <Home />}
      </div>
    </ThemeProvider>
  );
}

export default App;
