export default function checkAuth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('/deny'));
    }, 1000);
  });
}
