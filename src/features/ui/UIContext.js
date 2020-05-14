import React, { createContext, useState, useEffect, useContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { now } from "./UIHandlers";

export const UICtx = createContext();
export const useUIContext = () => useContext(UICtx);

export default function UIProvider({ children }) {
  const [locale, setLocale] = useLocalStorage("country", "fr");
  const [darkTheme, setDarkTheme] = useLocalStorage("theme", true);
  const [quote, setQuote] = useLocalStorage("quote", true);
  const [reminderCount, setReminderCount] = useLocalStorage("reminder", 3);
  const [fullDate, setFullDate] = useLocalStorage("date", true);
  const [settings, setsettings] = useState(false);
  const [time, setTime] = useState(now(locale));

  useEffect(() => {
    localeRef.current !== locale && setTime(now(locale, fullDate));
    const date = setInterval(() => {
      setTime(now(locale, fullDate));
    }, 60000);
    return () => clearInterval(date);
  }, [locale, fullDate]);

  const toggleSettings = () => setsettings(!settings);
  const localeRef = React.useRef();

  return (
    <UICtx.Provider
      value={{
        settings,
        toggleSettings,
        time,
        setLocale,
        darkTheme,
        setDarkTheme,
        locale,
        quote,
        setQuote,
        fullDate,
        setFullDate,
        reminderCount,
        setReminderCount,
      }}
    >
      {children}
    </UICtx.Provider>
  );
}
