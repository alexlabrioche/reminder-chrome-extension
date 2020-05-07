import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/AppContext";
import DeleteIcon from "../svg/delete.svg";
import { checkForArrayError, favoriteSitesSchema } from "../validations";
import { isEmpty } from "lodash";

const recurrencyValues = Array.from(Array(28)).map((_, i) => i + 1);

export default function FavoriteForm() {
  const {
    favoriteSites,
    onSubmit,
    addFavorite,
    removeFavorite,
    handleRecurrence,
    toRelative,
  } = useContext(AppContext);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: favoriteSitesSchema,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <h4 className="three columns">Titre</h4>
        <h4 className="four columns">URL</h4>
        <h4 className="two columns">Récurrence</h4>
      </div>
      {favoriteSites.map((fav, index) => {
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
              <img
                style={{ cursor: "pointer" }}
                src={DeleteIcon}
                alt="Delete Icon"
                onClick={removeFavorite(fav.title)}
              />
            </label>
          </div>
        );
      })}
      <button
        type="button"
        onClick={addFavorite}
        disabled={!isEmpty(errors)}
        style={{ marginRight: "20px" }}
      >
        Ajouter
      </button>
      {isEmpty(errors) && <input type="submit" value="Valider" />}
    </form>
  );
}
