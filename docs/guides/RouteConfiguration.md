# Route Configuration
This is the example object config for react-router-guard

| Property | Type | Required  | Default |
| ------------- | ------------- | ------------- | ------------- |
| path  | String  | true  |  |
| component  | Reactcomponent  | true  |   |
| canActivate  | Array[func]  | false  |   |
| redirect  | String  | false  |   |
| exact  | Boolean  | false  | false  |
| routes  | Array[Object]  | false  |   |

```jsx
import { dynamicWrapper } from 'react-router-guard';
import { checkAuth, checkResolve } from './guards';

export default [
  {
    path: '/user',
    component: dynamicWrapper(() => import('./layouts/UserLayout')), // file location on your project
    canActivate: [checkAuth],
    routes: [
      {
        path: '/user',
        redirect: '/user/profile',
      },
      {
        path: '/user/profile',
        canActivate: [checkResolve],
        component: dynamicWrapper(() => import('./pages/User/Profile')),
      },
      {
        path: '/user/setting',
        component: dynamicWrapper(() => import('./pages/User/Setting')),
      },
    ],
  },
  {
    path: '/',
    component: dynamicWrapper(() => import('./layouts/MainLayout')),
    routes: [
      {
        path: '/',
        exact: true,
        component: dynamicWrapper(() => import('./pages/Home')),
      },
      {
        path: '/services',
        redirect: '/services/1',
      },
      {
        path: '/services/1',
        component: dynamicWrapper(() => import('./pages/Services/NewService1')),
      },
      {
        path: '/services/2',
        component: dynamicWrapper(() => import('./pages/Services/NewService2')),
      },
    ],
  },
];
```
