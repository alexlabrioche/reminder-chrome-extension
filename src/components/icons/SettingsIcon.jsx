import React from "react";
import { useUIContext } from "../../features/ui/UIContext";

export default function SettingsIcon({
  width = "100%",
  className = "",
  height = "100%",
  viewBox = "0 0 32 32",
  onClick,
}) {
  const { darkTheme } = useUIContext();
  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      viewBox={viewBox}
      className={`svg-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill={darkTheme ? "#F1F1F1" : "#333333"}
        d="M12 16c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm0 1c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"
      />
    </svg>
  );
}
