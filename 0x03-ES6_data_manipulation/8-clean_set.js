export default function cleanSet(set, startString) {
  const myValues = Array.from(set).filter((value) => value.startsWith(startString));
  const myString = myValues.join('-');

  return myString;
}
