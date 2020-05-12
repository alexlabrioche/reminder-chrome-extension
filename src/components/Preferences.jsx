import React from "react";
import countries from "../assets/countries";
import { useUIContext } from "../features/ui/UIContext";

export default function LocaleForm() {
  const { setLocale, darkTheme, setDarkTheme, locale } = useUIContext();
  console.log("locale", locale);
  return (
    <div className="preferences">
      <label>
        <select
          name={`locale`}
          defaultValue={locale}
          onChange={(e) => setLocale(e.target.value)}
        >
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
