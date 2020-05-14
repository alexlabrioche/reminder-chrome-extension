import { DateTime } from "luxon";
import id from "uuid/v4";

export function addEmptyField() {
  return {
    id: id(),
    title: "",
    url: "",
    recurrence: 1,
  };
}

export function remindIn(days) {
  return DateTime.local().startOf("day").plus({ days }).toMillis();
}

export function preSave(favorites) {
  return favorites.map((fav) => ({
    ...fav,
    id: fav.id || id(),
    remindIn: remindIn(fav.recurrence),
  }));
}

export function update(favorites, IdToUpdate) {
  return favorites.map((fav) =>
    fav.id === IdToUpdate
      ? {
          ...fav,
          remindIn: remindIn(fav.recurrence + 1),
        }
      : fav
  );
}

export function favToDisplay(favorites) {
  const today = DateTime.local().startOf("day").toMillis();
  let toDisplay = [];
  favorites.forEach((fav) => {
    if (fav.remindIn <= today) {
      toDisplay.push(fav);
    }
  });
  return toDisplay;
}
