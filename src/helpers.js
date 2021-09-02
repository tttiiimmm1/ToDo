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
