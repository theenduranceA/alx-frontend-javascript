export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const myQuery = (weakMap.get(endpoint) || 0) + 1;
  weakMap.set(endpoint, myQuery);

  if (myQuery >= 5) {
    throw new Error('Endpoint load is high');
  }
}
