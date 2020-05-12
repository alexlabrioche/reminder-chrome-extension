import React, { createContext, useState, useEffect, useContext } from "react";
import { DateTime } from "luxon";
import id from "uuid/v4";
import useLocalStorage from "../../hooks/useLocalStorage";
import { exampleData, addEmptyField } from "../../assets/favoriteSites";

// const isDev = process.env.NODE_ENV === "development";

function enhanceFormData(favArray) {
  const start = () => DateTime.local().startOf("day").toISO();
  return favArray.map((fav) => ({
    ...fav,
    id: id(),
    start,
    remindIn: DateTime.local()
      .startOf("day")
      .plus({ days: fav.recurrence })
      .toMillis(),
    visited: false,
  }));
}

export const FavoritesCtx = createContext();

function favToDisplay(favorites) {
  const today = DateTime.local().startOf("day").toMillis();
  let toDisplay = [];
  favorites.forEach((fav) => {
    if (fav.remindIn <= today && fav.visited === false) {
      toDisplay.push(fav);
    }
  });
  return toDisplay.slice(0, 3);
}

export const useFavoritesContext = () => useContext(FavoritesCtx);

export default function FavoritesProvider({ children }) {
  const [stored, setStored] = useLocalStorage("favzz", exampleData);
  const [favoriteSites, setFavoriteSites] = useState(stored);
  const [toDisplay, setToDisplay] = useState(favToDisplay(favoriteSites));
  console.log("FavoritesProvider stored", stored);

  useEffect(() => {
    console.log("🔥 useEffect FavoritesProvider");
    setToDisplay(favToDisplay(favoriteSites));
  }, [favoriteSites]);

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

  const visitFavorite = ({ url, id }) => {
    window.open(url);
  };

  return (
    <FavoritesCtx.Provider
      value={{
        favoriteSites,
        toDisplay,
        addFavorite,
        removeFavorite,
        handleRecurrence,
        visitFavorite,
        enhanceFormData,
        setStored,
        setFavoriteSites,
      }}
    >
      {children}
    </FavoritesCtx.Provider>
  );
}
