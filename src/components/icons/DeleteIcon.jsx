import React from "react";

export default function DeleteIcon({
  fill = "#fff",
  width = "100%",
  className = "",
  height = "100%",
  viewBox = "0 0 32 32",
  onClick,
}) {
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
        fill={fill}
        d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
      />
    </svg>
  );
}
