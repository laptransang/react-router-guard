export default function checkAuth() {
  return new Promise((resolve, reject) => {
    resolve({ user: { email: 'user@gmai.com', name: 'Test' } });
  });
}
