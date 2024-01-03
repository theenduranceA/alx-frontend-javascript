export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    const isProcessed = Math.random() < 0.5;

    if (isProcessed) {
      resolve(`File "${fileName}" processed successfully.`);
    } else {
      reject(new Error(`"${fileName}" cannot be processed`));
    }
  });
}
