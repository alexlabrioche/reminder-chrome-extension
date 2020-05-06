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

function displayDate(time) {
  const { day, month, year, hour, minute } = time;
  const addZero = (n) => (n < 10 ? `0${n}` : n);
  const dayDate = `${addZero(day)}/${addZero(month)}/${year}`;
  const hourMins = `${addZero(hour)}:${addZero(minute)}`;
  return `${dayDate} _ ${hourMins}`;
}

export default function Menu() {
  const { toggleSettings, time } = useContext(AppContext);
  return (
    <StyledMenu>
      <h5>{displayDate(time)}</h5>
      <img src={SettingsIcon} alt="Settings Icon" onClick={toggleSettings} />
    </StyledMenu>
  );
}
