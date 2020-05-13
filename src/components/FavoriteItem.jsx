import React from "react";
import { useFavoritesContext } from "../features/favorites/favoritesContext";

export default function FavoriteItem({ url, title, id }) {
  const { visitFavorite } = useFavoritesContext();
  const handleClick = () => {
    visitFavorite({ url, id });
  };
  return (
    <li className="fav-item" id={url} onClick={handleClick}>
      {title}
    </li>
  );
}
