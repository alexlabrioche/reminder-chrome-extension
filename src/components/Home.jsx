import React from "react";
import FavoriteItem from "./FavoriteItem";
import { useFavoritesContext } from "../features/favorites/favoritesContext";
import Quote from "./Quote";
import { useUIContext } from "../features/ui/UIContext";

export default function Home() {
  const { favorites } = useFavoritesContext();
  const { quote, reminderCount } = useUIContext();
  return (
    <div className="home">
      {favorites.length > 0 ? (
        favorites
          .slice(0, reminderCount)
          .map((fav, index) => <FavoriteItem key={index} {...fav} />)
      ) : quote ? (
        <Quote />
      ) : null}
    </div>
  );
}
