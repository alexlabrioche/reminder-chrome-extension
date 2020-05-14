import React from "react";
import countries from "../assets/countries";
import { useUIContext } from "../features/ui/UIContext";

const reminderValues = Array.from(Array(5)).map((_, i) => i + 1);

export default function LocaleForm() {
  const {
    setLocale,
    darkTheme,
    setDarkTheme,
    locale,
    quote,
    setQuote,
    fullDate,
    setFullDate,
    reminderCount,
    setReminderCount,
  } = useUIContext();
  return (
    <div className="row preferences">
      <label className="two columns">
        <select
          value={reminderCount}
          onChange={(e) => setReminderCount(e.target.value)}
        >
          {reminderValues.map((n) => (
            <option key={n} value={n}>
              {`${n} reminder${n === 1 ? "" : "s"}`}
            </option>
          ))}
        </select>
      </label>
      <label className="three columns">
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
        <span className="label-body">Dark</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={quote}
          onChange={(e) => setQuote(e.target.checked)}
        />
        <span className="label-body">Quotes</span>
      </label>
      <label>
        <input
          type="checkbox"
          checked={fullDate}
          onChange={(e) => setFullDate(e.target.checked)}
        />
        <span className="label-body">Full Date</span>
      </label>
    </div>
  );
}
