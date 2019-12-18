# Route Configuration
This is the example object config for react-router-guard

| name          | type                      | default       | description   |
| ------------- | -------------             | ------------- | ------------- |
| path          | String                    | true          | Any valid URL path or array of paths that path-to-regexp@^1.7.0 understands.               |
| component     | React.LazyExoticComponent |               | lazy(() => import('./page') |
| canActivate   | Array[() => Promise]      | []            | Array promise to validate permission to access route page              |
| redirect      | String                    |               |               |
| exact         | Boolean                   | false         |               |
| routes        | Array[Object]             |               |               |

```jsx
import { lazy } from 'react-router-guard';
import { checkAuth, checkResolve } from './guards';

export default [
  {
    path: '/user',
    component: lazy(() => import('./layouts/UserLayout')), // -> file location on your project
    canActivate: [checkAuth],
    routes: [
      {
        path: '/user',
        redirect: '/user/profile',
      },
      {
        path: '/user/profile',
        canActivate: [checkResolve],
        component: lazy(() => import('./pages/User/Profile')),
      },
      {
        path: '/user/setting',
        component: lazy(() => import('./pages/User/Setting')),
      },
    ],
  },
  {
    path: '/',
    component: lazy(() => import('./layouts/MainLayout')),
    routes: [
      {
        path: '/',
        exact: true,
        component: lazy(() => import('./pages/Home')),
      },
      {
        path: '/services',
        redirect: '/services/1',
      },
      {
        path: '/services/1',
        component: lazy(() => import('./pages/Services/NewService1')),
      },
      {
        path: '/services/2',
        component: lazy(() => import('./pages/Services/NewService2')),
      },
    ],
  },
];
```
