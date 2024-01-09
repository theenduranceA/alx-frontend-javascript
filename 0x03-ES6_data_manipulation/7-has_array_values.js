export default function hasValuesFromArray(set, array) {
  const myElements = array.every((element) => set.has(element));

  return myElements;
}
