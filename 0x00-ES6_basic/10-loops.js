export default function appendToEachArrayValue(array, appendString) {
  const Myarray = [];

  for (const value of array) {
    Myarray.push(appendString + value);
  }

  return Myarray;
}
