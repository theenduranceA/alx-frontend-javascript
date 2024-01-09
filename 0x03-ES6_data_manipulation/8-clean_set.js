export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }

  return [...set]
    .filter((str) => str && str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
}
