import React, { createContext, useState, useEffect } from "react";
import { DateTime } from "luxon";

export const AppContext = createContext();

const initial = [
  {
    title: "GMail",
    url: "https://gmail.com",
    recurrence: "daily",
    visited: false,
  },
  {
    title: "Medium",
    url: "https://medium.com",
    recurrence: "weekly",
    visited: false,
  },
  {
    title: "Prout",
    url: "https://prout.com",
    recurrence: "monthly",
    visited: false,
  },
];

const now = () => DateTime.local();

const setEmptyField = () => ({
  title: "",
  url: "",
  recurrence: "",
});

function initDateTime(favorites) {
  const start = DateTime.local().startOf("day");
  return favorites.map((fav) => ({ ...fav, start }));
}

export default function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(initDateTime(initial));
  const [showSettings, setShowSettings] = useState(true);
  const [time, setTime] = useState(now());
  const toggleSettings = () => setShowSettings(!showSettings);

  useEffect(() => {
    const date = setInterval(() => {
      setTime(now());
    }, 60000);
    return () => clearInterval(date);
  }, []);

  return (
    <AppContext.Provider
      value={{
        showSettings,
        toggleSettings,
        favorites,
        setFavorites,
        time,
        setEmptyField,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
