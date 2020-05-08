import React, { useContext } from "react";
import SettingsIcon from "../svg/settings.svg";
import { AppContext } from "../context/AppContext";

export default function Menu() {
  const { toggleSettings, time } = useContext(AppContext);
  return (
    <div className="menu">
      <h5 className="app-title">{time}</h5>
      <img
        className="icon-btn"
        src={SettingsIcon}
        alt="Settings Icon"
        onClick={toggleSettings}
      />
    </div>
  );
}
