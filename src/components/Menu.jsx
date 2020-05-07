import React, { useContext } from "react";
import styled from "styled-components";
import SettingsIcon from "../svg/settings.svg";
import { AppContext } from "../context/AppContext";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  h5 {
    margin: 0;
  }
  img {
    cursor: pointer;
  }
`;

export default function Menu() {
  const { toggleSettings, time } = useContext(AppContext);
  return (
    <StyledMenu>
      <h5>{time}</h5>
      <img src={SettingsIcon} alt="Settings Icon" onClick={toggleSettings} />
    </StyledMenu>
  );
}
