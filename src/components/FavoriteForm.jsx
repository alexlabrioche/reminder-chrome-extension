import React from "react";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";
import { DateTime } from "luxon";

import { checkForArrayError, favoriteSitesSchema } from "../validations";
import { useFavoritesContext } from "../features/favorites/favoritesContext";
import { useUIContext } from "../features/ui/UIContext";
import DeleteIcon from "./icons/DeleteIcon";

export default function FavoriteForm() {
  const {
    allFavorites,
    addFavorite,
    removeFavorite,
    handleRecurrence,
    setFavorites,
  } = useFavoritesContext();
  const { toggleSettings, locale } = useUIContext();

  const label = (days) =>
    days === 0
      ? DateTime.local().plus({ days }).toRelativeCalendar({ locale })
      : DateTime.local().plus({ days }).toRelative({ locale });

  const recurrencyValues = Array.from(Array(15)).map((_, index) => ({
    val: index,
    label: label(index),
  }));

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
        return (
          <div
            className="row form-field"
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
            <label className="three columns">
              <select
                name={`${fieldName}.recurrence`}
                defaultValue={fav.recurrence}
                id={`rec-select_${index}`}
                onChange={handleRecurrence}
                ref={register}
              >
                {recurrencyValues.map((item) => (
                  <option key={item.val} value={item.val}>
                    {item.label}
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
            {/* <label className="two columns">{relativeStr}</label> */}
            <label className="one columns form-icon">
              <DeleteIcon
                height="16px"
                width="16px"
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
        style={{ marginRight: "30px", marginTop: "30px" }}
      >
        ADD
      </button>
      {isEmpty(errors) && (
        <input type="submit" className="button-primary" value="OK" />
      )}
    </form>
  );
}
