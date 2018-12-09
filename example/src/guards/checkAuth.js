export default function checkAuth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('/test/deny'));
    }, 1000);
  });
}
