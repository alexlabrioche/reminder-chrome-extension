import React from "react";
import FavoriteForm from "./FavoriteForm";
import LocaleForm from "./LocaleForm";

export default function Settings() {
  return (
    <div className="container">
      <FavoriteForm />
      <LocaleForm />
    </div>
  );
}
