# Route Authentication
You can protect your private route with guard feature in react-router-guard, for example you have url /users, it can only access when the user has login or pass some condition you want, to solve this case you use canActivate props on config and pass promise for this props

```jsx
// checkAuth
export default function checkAuth() {
  return new Promise((resolve, reject) => {
    // you can call api or do what you want in here, for this case I use localStorage
    const user = localStorage.getItem('user');
    if (user) {
        // If success you can pass data to all sub route, the sub route component can access it via props guardData
        resolve(user);
    } else {
        // If failure you can redirect url you want.
        reject(new Error('/login));
    }
  });
}

// Example using check authentication
export default [
  {
    path: '/user',
    component: dynamicWrapper(() => import('./layouts/UserLayout')), // file location on your project
    canActivate: [checkAuth],
    routes: [
      {
        path: '/user/profile',
        component: dynamicWrapper(() => import('./pages/User/Profile')),
      },
      {
        path: '/user/setting',
        component: dynamicWrapper(() => import('./pages/User/Setting')),
      },
    ],
  },
];
```
