# Route Redirect
In case you want to change url for current page to new url, and redirect old url to new url, it also support dynamic params, and default exact is true.

```jsx
// Object config
export default [
  {
    path: '/old-url',
    redirect: '/new-url',
  },
  {
    path: '/old-url/:id',
    redirect: '/new-url/:id',
  },
];
```
