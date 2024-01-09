export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  let myQuery = 0;
  if (weakMap.get(endpoint)) myQuery = weakMap.get(endpoint);
  weakMap.set(endpoint, myQuery + 1);
  if (myQuery + 1 >= 5) throw new Error('Endpoint load is high');
}
