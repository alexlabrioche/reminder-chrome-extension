import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../context/AppContext";

export default function LocaleForm() {
  const { register, handleSubmit } = useForm();
  const { handleLocale } = useContext(AppContext);
  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="two columns">
        <select
          name={`locale`}
          defaultValue={"fr"}
          onChange={handleLocale}
          ref={register}
        >
          <option value="fr">fr</option>
          <option value="en">en</option>
          <option value="de">de</option>
        </select>
      </label>
    </form>
  );
}
