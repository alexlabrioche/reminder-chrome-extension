import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import countries from "../data/countries";

export default function LocaleForm() {
  const { handleLocale, darkTheme, setDarkTheme, locale } = useContext(
    AppContext
  );
  return (
    <div className="preferences">
      <label>
        <select name={`locale`} defaultValue={locale} onChange={handleLocale}>
          {countries.map(({ name, alpha2, id }) => (
            <option key={id} value={alpha2}>
              {name}
            </option>
          ))}
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={darkTheme}
          onChange={(e) => setDarkTheme(e.target.checked)}
        />
        <span className="label-body">dark theme</span>
      </label>
    </div>
  );
}
