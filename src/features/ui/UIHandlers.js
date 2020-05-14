import { DateTime } from "luxon";

export function now(locale = "fr", full = true) {
  return DateTime.local().toLocaleString(
    full
      ? {
          weekday: "long",
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          locale,
        }
      : {
          hour: "2-digit",
          minute: "2-digit",
          locale,
        }
  );
}
