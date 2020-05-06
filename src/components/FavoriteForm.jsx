import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/AppContext";
import DeleteIcon from "../svg/delete.svg";
import { DateTime } from "luxon";

export default function FavoriteForm() {
  const { register, handleSubmit } = useForm();
  const { favorites, setFavorites, setEmptyField } = useContext(AppContext);

  const onSubmit = ({ fav }) => {
    console.log(fav);
  };

  const addFavorite = () => {
    setFavorites((prev) => [...prev, setEmptyField]);
  };

  const removeFavorite = (title) => () => {
    setFavorites((prev) => [...prev.filter((item) => item.title !== title)]);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <h3 className="three columns">Titre</h3>
        <h3 className="four columns">URL</h3>
        <h3 className="three columns">Rappel</h3>
      </div>
      {favorites.map((fav, index) => {
        const fieldName = `fav[${index}]`;
        console.log('fav.start.endOf("day")', fav.start.endOf("day"));
        return (
          <fieldset name={fieldName} key={fieldName}>
            <div className="row">
              <label className="three columns">
                <input
                  className="u-full-width"
                  type="text"
                  id={`title${index}`}
                  name={`${fieldName}.title`}
                  defaultValue={fav.title}
                  ref={register}
                />
              </label>
              <label className="four columns">
                <input
                  className="u-full-width"
                  type="text"
                  id={`url${index}`}
                  name={`${fieldName}.url`}
                  defaultValue={fav.url}
                  ref={register}
                />
              </label>
              <label className="three columns">
                <select className="u-full-width" defaultValue={fav.recurrence}>
                  <option value="daily">Journalier</option>
                  <option value="weekly">Hebdomadaire</option>
                  <option value="bi-monthly">Bi-mensuel</option>
                  <option value="monthly">Mensuel</option>
                </select>
              </label>
              {/* <label className="one columns">{}</label> */}
              <label className="one columns">
                <img
                  src={DeleteIcon}
                  alt="Delete Icon"
                  onClick={removeFavorite(fav.title)}
                />
              </label>
            </div>
          </fieldset>
        );
      })}
      <button type="button" onClick={addFavorite}>
        Ajouter
      </button>
      <input type="submit" value="Valider" />
    </form>
  );
}
