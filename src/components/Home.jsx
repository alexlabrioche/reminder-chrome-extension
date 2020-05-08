import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function FavoriteItem({ url, title }) {
  return (
    <li className="fav-item" onClick={() => window.open(url)}>
      {title}
    </li>
  );
}

export default function Home() {
  const { favoriteSites } = useContext(AppContext);
  return (
    <div className="home">
      {favoriteSites ? (
        <ol>
          {favoriteSites.map((fav, index) => (
            <FavoriteItem key={index} {...fav} />
          ))}
        </ol>
      ) : (
        <h6>Rien à visiter pour le moment...</h6>
      )}
    </div>
  );
}
