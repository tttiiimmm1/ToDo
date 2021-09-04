export function getTimestamp() {
  const d = new Date();
  const timestamp =
    d.getFullYear() +
    "/" +
    parseInt(d.getMonth() + 1) +
    "/" +
    d.getDate() +
    ", " +
    d.getHours() +
    ":" +
    d.getMinutes();
  return timestamp;
}

export function setToStorage(items) {
  console.log(items);
  localStorage.setItem("allTodos", JSON.stringify(items));
}

export function getFromStorage() {
  return JSON.parse(window.localStorage.getItem("allTodos"));
}
