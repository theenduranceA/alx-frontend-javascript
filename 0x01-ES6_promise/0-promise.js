export default function getResponseFromAPI() {
  const success = true;

  return success
    ? Promise.resolve()
    : Promise.reject();
}
