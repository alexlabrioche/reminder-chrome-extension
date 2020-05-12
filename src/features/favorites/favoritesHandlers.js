import { DateTime } from "luxon";
import id from "uuid/v4";

export function addEmptyField() {
  return {
    id: id(),
    title: "",
    url: "",
    recurrence: 1,
    visited: false,
  };
}

export function preSave(favorites) {
  const start = () => DateTime.local().startOf("day").toMillis();
  const remindIn = (days) =>
    DateTime.local().startOf("day").plus({ days }).toMillis();

  return favorites.map((fav) => ({
    ...fav,
    id: fav.id || id(),
    start: fav.start || start,
    remindIn: remindIn(fav.recurrence),
    visited: fav.visited || false,
  }));
}

export function favToDisplay(favorites) {
  const today = DateTime.local().startOf("day").toMillis();
  let toDisplay = [];
  favorites.forEach((fav) => {
    if (fav.remindIn <= today && fav.visited === false) {
      toDisplay.push(fav);
    }
  });
  return toDisplay.slice(0, 3);
}
