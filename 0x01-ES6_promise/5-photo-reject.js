export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    const errorCondition = true;

    if (errorCondition) {
      const errorMessage = `${fileName} cannot be processed`;
      reject(new Error(errorMessage));
    } else {
      const successMessage = `${fileName} has been successfully uploaded`;
      resolve(successMessage);
    }
  });
}
