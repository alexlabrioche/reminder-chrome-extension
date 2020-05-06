import React, { useContext } from "react";
import styled from "styled-components";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import { AppContext } from "./context/AppContext";

const StyledApp = styled.div`
  color: #f3f3f3;
  font-family: "Source Code Pro", monospace;
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

function App() {
  const { showSettings } = useContext(AppContext);
  return (
    <StyledApp>
      <Menu />
      {showSettings ? <Settings /> : <Home />}
    </StyledApp>
  );
}

export default App;
