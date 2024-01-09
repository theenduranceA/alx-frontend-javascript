export default function cleanSet(set, string) {
  if (string === undefined || string.length === 0) {
    return '';
  }

  const myValues = [...set]
    .filter((str) => str !== undefined && str.startsWith(string))
    .map((str) => str.slice(string.length));

  return myValues.join('-');
}
