import React from "react";
import FavoriteItem from "./FavoriteItem";
import { useFavoritesContext } from "../features/favorites/favoritesContext";
import Quote from "./Quote";
import { useUIContext } from "../features/ui/UIContext";

export default function Home() {
  const { favorites } = useFavoritesContext();
  const { quote } = useUIContext();
  return (
    <div className="home">
      {favorites.length > 0 ? (
        <ol>
          {favorites.map((fav, index) => (
            <FavoriteItem key={index} {...fav} />
          ))}
        </ol>
      ) : quote ? (
        <Quote />
      ) : null}
    </div>
  );
}
