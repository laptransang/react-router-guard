import { dynamicWrapper } from 'react-router-guard';
import { checkAuth, checkResolve } from './guards';

export default [
  {
    path: '/user',
    component: dynamicWrapper(() => import('./layouts/UserLayout')),
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
