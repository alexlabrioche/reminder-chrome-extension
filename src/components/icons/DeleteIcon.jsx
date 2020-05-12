import React from "react";
import { useUIContext } from "../../features/ui/UIContext";

export default function DeleteIcon({
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
      viewBox={viewBox}
      className={`svg-icon ${className}`}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill={darkTheme ? "#F1F1F1" : "#333333"}
        d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
      />
    </svg>
  );
}
