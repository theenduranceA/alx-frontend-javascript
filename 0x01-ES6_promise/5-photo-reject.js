// uploadPhoto.js

export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulating an error condition (you can modify this based on your requirements)
    const errorCondition = true;

    if (errorCondition) {
      const errorMessage = `${fileName} cannot be processed`;
      reject(new Error(errorMessage));
    } else {
      // Simulating a successful photo upload (you can modify this based on your requirements)
      const successMessage = `${fileName} has been successfully uploaded`;
      resolve(successMessage);
    }
  });
}
