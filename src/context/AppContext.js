import React, { createContext, useState, useEffect } from "react";
import { DateTime } from "luxon";
import id from "uuid/v4";
import useLocalStorage from "../hooks/useLocalStorage";
import { exampleData, addEmptyField } from "../data/favoriteSites";

const isDev = process.env.NODE_ENV === "development";

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

function enhanceFormData(favArray) {
  const start = () => DateTime.local().startOf("day").toISO();
  return favArray.map((fav) => ({
    ...fav,
    id: id(),
    start,
    remindInISO: DateTime.local()
      .startOf("day")
      .plus({ days: fav.recurrence })
      .toISO(),
    visited: false,
  }));
}

function toRelativeLocale(days, loc) {
  return DateTime.local().plus({ days }).toRelativeCalendar({ locale: loc });
}

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [locale, setLocale] = useLocalStorage("country", "fr");
  const [stored, setStored] = useLocalStorage("favzz", exampleData);
  const [favoriteSites, setFavoriteSites] = useState(stored);
  const [showSettings, setShowSettings] = useState(isDev);
  const [time, setTime] = useState(now(locale));
  const toggleSettings = () => setShowSettings(!showSettings);
  const localeRef = React.useRef();
  const [darkTheme, setDarkTheme] = useLocalStorage("theme", true);

  useEffect(() => {
    localeRef.current !== locale && setTime(now(locale));
    const date = setInterval(() => {
      setTime(now(locale));
    }, 60000);
    return () => clearInterval(date);
  }, [locale]);

  const onSubmit = (data) => {
    const enhancedFavoriteSites = enhanceFormData(data.favorites);
    setFavoriteSites(enhancedFavoriteSites);
    setStored(enhancedFavoriteSites);
    toggleSettings();
  };

  const addFavorite = () => {
    setFavoriteSites((prev) => [...prev, addEmptyField()]);
  };

  const removeFavorite = (title) => () => {
    setFavoriteSites((prev) => [
      ...prev.filter((item) => item.title !== title),
    ]);
  };

  const handleRecurrence = (e) => {
    const { id, value } = e.target;
    const [, index] = id.split("_");
    setFavoriteSites((prev) => [
      ...prev.map((fav, idx) =>
        idx === parseInt(index, 10) ? { ...fav, recurrence: value } : fav
      ),
    ]);
  };

  const handleLocale = (e) => {
    const { value } = e.target;
    setLocale(value);
  };

  const toRelative = (n) => {
    return toRelativeLocale(n, locale);
  };
  return (
    <AppContext.Provider
      value={{
        showSettings,
        toggleSettings,
        favoriteSites,
        time,
        toRelative,
        onSubmit,
        addFavorite,
        removeFavorite,
        handleRecurrence,
        handleLocale,
        darkTheme,
        setDarkTheme,
        locale,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
