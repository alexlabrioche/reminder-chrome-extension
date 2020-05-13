import React, { createContext, useState, useContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import exampleData from "../../assets/favorites";
import {
  addEmptyField,
  favToDisplay,
  preSave,
  update,
} from "./favoritesHandlers";

export const FavoritesCtx = createContext();
export const useFavoritesContext = () => useContext(FavoritesCtx);

export default function FavoritesProvider({ children }) {
  const [stored, setStored] = useLocalStorage("favzz", exampleData);
  const [favoriteSites, setFavoriteSites] = useState(stored);
  const toDisplay = () => favToDisplay(favoriteSites);

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
    const newFavorites = update(favoriteSites, id);
    setFavoriteSites(newFavorites);
    setStored(newFavorites);
  };

  const setFavorites = (data) => {
    const newFavorites = preSave(data.favorites);
    setFavoriteSites(newFavorites);
    setStored(newFavorites);
  };

  return (
    <FavoritesCtx.Provider
      value={{
        allFavorites: favoriteSites,
        favorites: toDisplay(),
        addFavorite,
        removeFavorite,
        handleRecurrence,
        visitFavorite,
        preSave,
        setFavorites,
      }}
    >
      {children}
    </FavoritesCtx.Provider>
  );
}
