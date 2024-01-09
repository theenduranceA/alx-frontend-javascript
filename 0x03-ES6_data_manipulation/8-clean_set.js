export default function cleanSet(set, startString) {
  const myValues = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length));
  const myString = myValues.join('-');

  return myString;
}
