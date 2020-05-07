import React, { createContext, useState, useEffect } from "react";
import { DateTime } from "luxon";
import id from "uuid/v4";

export const AppContext = createContext();

const initial = [
  {
    id: id(),
    title: "GMail",
    url: "https://gmail.com",
    recurrence: 1,
    visited: false,
  },
  {
    id: id(),
    title: "Medium",
    url: "https://medium.com",
    recurrence: 10,
    visited: false,
  },
  {
    id: id(),
    title: "Prout",
    url: "https://prout.com",
    recurrence: 14,
    visited: false,
  },
];

const now = (locale = "fr") =>
  DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    locale,
  });

const dayStart = () => DateTime.local().startOf("day").toISO();

const addEmptyField = () => ({
  id: id(),
  title: "",
  url: "",
  recurrence: "1",
});

const enhanceFormData = (favArray) => {
  return favArray.map((fav) => ({
    ...fav,
    id: id(),
    start: dayStart(),
    remindInISO: DateTime.local()
      .startOf("day")
      .plus({ days: fav.recurrence })
      .toISO(),
    visited: false,
  }));
};
const toRelativeLocale = (days, loc) =>
  DateTime.local().plus({ days }).toRelativeCalendar({ locale: loc });

export default function AppProvider({ children }) {
  const [locale, setLocale] = useState("fr");
  const [favoriteSites, setFavoriteSites] = useState(initial);
  const [showSettings, setShowSettings] = useState(true);
  const [time, setTime] = useState(now(locale));
  const toggleSettings = () => setShowSettings(!showSettings);

  const localeRef = React.useRef();

  useEffect(() => {
    localeRef.current !== locale && setTime(now(locale));
    const date = setInterval(() => {
      setTime(now(locale));
    }, 60000);
    return () => clearInterval(date);
  }, [locale]);

  const onSubmit = (data) => {
    const enhancedFavoriteSites = enhanceFormData(data.favorites);
    console.log("enhancedFavoriteSites", enhancedFavoriteSites);
    setFavoriteSites(enhancedFavoriteSites);
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
