import React from "react";
import FavoriteForm from "./FavoriteForm";
import Preferences from "./Preferences";

export default function Settings() {
  return (
    <div className="container settings">
      <Preferences />
      <FavoriteForm />
    </div>
  );
}
