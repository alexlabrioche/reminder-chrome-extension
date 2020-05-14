import React from "react";
import quotes from "../assets/quotes.json";
import { useUIContext } from "../features/ui/UIContext";

export default function Quote() {
  const { locale } = useUIContext();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const wikiUrl = `https://${locale}.wikipedia.org/wiki/${quote.a.replace(
    " ",
    "_"
  )}`;

  return (
    <div>
      <h5>{quote.t}</h5>
      <a
        className="offset-by-nine columns"
        href={wikiUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i>{quote.a}</i>
      </a>
    </div>
  );
}
