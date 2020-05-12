import React from "react";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";

import { checkForArrayError, favoriteSitesSchema } from "../validations";
import { useFavoritesContext } from "../features/favorites/favoritesContext";
import { useUIContext } from "../features/ui/UIContext";
import DeleteIcon from "./icons/DeleteIcon";

const recurrencyValues = Array.from(Array(28)).map((_, i) => i + 1);

export default function FavoriteForm() {
  const {
    allFavorites,
    addFavorite,
    removeFavorite,
    handleRecurrence,
    setFavorites,
  } = useFavoritesContext();

  const { toRelative, toggleSettings } = useUIContext();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: favoriteSitesSchema,
  });

  const onSubmit = (data) => {
    setFavorites(data);
    toggleSettings();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {allFavorites.map((fav, index) => {
        const fieldName = `favorites[${index}]`;
        const relativeStr = toRelative(fav.recurrence);
        return (
          <div
            className="row field-form"
            key={index}
            style={{
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <label className="three columns">
              <input
                className="u-full-width"
                type="text"
                id={fav.id}
                name={`${fieldName}.title`}
                defaultValue={fav.title}
                ref={register}
              />
              {checkForArrayError({
                errors,
                index,
                fieldArray: "favorites",
                field: "title",
              })}
            </label>
            <label className="four columns">
              <input
                className="u-full-width"
                type="text"
                name={`${fieldName}.url`}
                defaultValue={fav.url}
                ref={register}
              />
              {checkForArrayError({
                errors,
                index,
                fieldArray: "favorites",
                field: "url",
              })}
            </label>
            <label className="one columns">
              <select
                name={`${fieldName}.recurrence`}
                defaultValue={fav.recurrence}
                id={`rec-select_${index}`}
                onChange={handleRecurrence}
                ref={register}
              >
                {recurrencyValues.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              {checkForArrayError({
                errors,
                index,
                fieldArray: "favorites",
                field: "recurrence",
              })}
            </label>
            <label className="two columns">{relativeStr}</label>
            <label className="one columns">
              <DeleteIcon onClick={removeFavorite(fav.title)} />
            </label>
          </div>
        );
      })}

      <button
        type="button"
        onClick={addFavorite}
        disabled={!isEmpty(errors)}
        style={{ marginRight: "30px", marginTop: "30px" }}
      >
        Ajouter
      </button>
      {isEmpty(errors) && (
        <input type="submit" className="button-primary" value="Valider" />
      )}
    </form>
  );
}
