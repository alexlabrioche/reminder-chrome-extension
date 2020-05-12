import React, { useContext } from "react";
import { FavoritesCtx } from "../features/favorites/favoritesContext";

export default function FavoriteItem({ url, title, id }) {
  const { visitFavorite } = useContext(FavoritesCtx);
  console.log("id", id);
  const handleClick = (e) => {
    const url = e.target.id;
    visitFavorite({ url });
  };
  return (
    <li className="fav-item" id={url} onClick={handleClick}>
      {title}
    </li>
  );
}
