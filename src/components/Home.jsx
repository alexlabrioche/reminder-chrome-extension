import React from "react";
import FavoriteItem from "./FavoriteItem";
import { useFavoritesContext } from "../features/favorites/favoritesContext";

export default function Home() {
  const { favorites } = useFavoritesContext();
  return (
    <div className="home">
      {favorites.length > 0 ? (
        <ol>
          {favorites.map((fav, index) => (
            <FavoriteItem key={index} {...fav} />
          ))}
        </ol>
      ) : (
        <h6>Aucun favoris à visiter pour le moment...</h6>
      )}
    </div>
  );
}
