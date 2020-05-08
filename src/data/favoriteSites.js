import id from "uuid/v4";

export function addEmptyField() {
  return {
    id: id(),
    title: "",
    url: "",
    recurrence: 1,
  };
}

export const exampleData = [
  {
    id: id(),
    title: "GMail",
    url: "https://gmail.com",
    recurrence: 1,
    visited: false,
  },
  {
    id: id(),
    title: "Medium",
    url: "https://medium.com",
    recurrence: 2,
    visited: false,
  },
  {
    id: id(),
    title: "StackOverFlow",
    url: "https://stackoverflow.com/",
    recurrence: 7,
    visited: false,
  },
];
