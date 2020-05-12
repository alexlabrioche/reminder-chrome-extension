import React, { createContext, useState, useEffect, useContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { now, toRelativeLocale } from "./UIHandlers";

// const isDev = process.env.NODE_ENV === "development";

export const UICtx = createContext();
export const useUIContext = () => useContext(UICtx);

export default function UIProvider({ children }) {
  const [locale, setLocale] = useLocalStorage("country", "fr");
  const [darkTheme, setDarkTheme] = useLocalStorage("theme", true);
  const [settings, setsettings] = useState(false);
  const [time, setTime] = useState(now(locale));

  useEffect(() => {
    localeRef.current !== locale && setTime(now(locale));
    const date = setInterval(() => {
      setTime(now(locale));
    }, 60000);
    return () => clearInterval(date);
  }, [locale]);

  const toggleSettings = () => setsettings(!settings);
  const localeRef = React.useRef();
  const toRelative = (days) => toRelativeLocale(days, locale);

  return (
    <UICtx.Provider
      value={{
        settings,
        toggleSettings,
        time,
        toRelative,
        setLocale,
        darkTheme,
        setDarkTheme,
        locale,
      }}
    >
      {children}
    </UICtx.Provider>
  );
}
