import { DateTime } from "luxon";

export function now(locale = "fr") {
  return DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    locale,
  });
}

export function toRelativeLocale(days, loc) {
  return DateTime.local().plus({ days }).toRelativeCalendar({ locale: loc });
}
