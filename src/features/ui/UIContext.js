import React, { createContext, useState, useEffect } from "react";
import { DateTime } from "luxon";
import useLocalStorage from "../../hooks/useLocalStorage";

// const isDev = process.env.NODE_ENV === "development";

function now(locale = "fr") {
  return DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    locale,
  });
}

function toRelativeLocale(days, loc) {
  return DateTime.local().plus({ days }).toRelativeCalendar({ locale: loc });
}

export const UICtx = createContext();

export default function UIProvider({ children }) {
  const [locale, setLocale] = useLocalStorage("country", "fr");
  const [showSettings, setShowSettings] = useState(false);
  const [time, setTime] = useState(now(locale));
  const toggleSettings = () => setShowSettings(!showSettings);
  const localeRef = React.useRef();
  const [darkTheme, setDarkTheme] = useLocalStorage("theme", true);

  useEffect(() => {
    console.log("🔥 useEffect UIProvider");
    localeRef.current !== locale && setTime(now(locale));
    const date = setInterval(() => {
      setTime(now(locale));
    }, 60000);
    return () => clearInterval(date);
  }, [locale]);

  const handleLocale = (e) => {
    const { value } = e.target;
    setLocale(value);
  };

  const toRelative = (days) => {
    return toRelativeLocale(days, locale);
  };

  return (
    <UICtx.Provider
      value={{
        showSettings,
        toggleSettings,
        time,
        toRelative,
        handleLocale,
        darkTheme,
        setDarkTheme,
        locale,
      }}
    >
      {children}
    </UICtx.Provider>
  );
}
