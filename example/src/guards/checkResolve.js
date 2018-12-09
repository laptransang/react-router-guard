export default function checkResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'TSL' });
    }, 1000);
  });
}
