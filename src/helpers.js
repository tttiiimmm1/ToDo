/**
 * Constructs a timestamp
 * @return {String} timestamp
 */

export function getTimestamp() {
  const d = new Date();
  const m = (d.getMonth() >= 10) ? d.getMonth() : '0' + d.getMonth();
  const date = (d.getDate() >= 10) ? d.getDate() : '0' + d.getDate();
  const h = (d.getHours() >= 10) ? d.getHours() : '0' + d.getHours();
  const min = (d.getMinutes() >= 10) ? d.getMinutes() : '0' + d.getMinutes();
  const timestamp =
    d.getFullYear() +
    "/" +
    m +
    "/" +
    date +
    ", " +
    h +
    ":" +
    min;
  return timestamp;
}

/**
 * Sets todos into localStorage
 * @param {Array[Objects]} items
 * @return void
 */

export function setToStorage(items) {
  console.log(items);
  localStorage.setItem("allTodos", JSON.stringify(items));
}

/**
 * Fetches todos from localStorage, parses, and returns them
 * @param {Array[Objects]} items
 * @return {Array[Objects]} todos
 */

export function getFromStorage() {
  return JSON.parse(window.localStorage.getItem("allTodos"));
}
