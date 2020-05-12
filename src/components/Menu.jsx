import React from "react";
import { useUIContext } from "../features/ui/UIContext";
import SettingsIcon from "./icons/SettingsIcon";

export default function Menu() {
  const { toggleSettings, time } = useUIContext();
  return (
    <div className="menu">
      <h5 className="app-title">{time}</h5>
      <SettingsIcon width="36px" onClick={toggleSettings} />
    </div>
  );
}
