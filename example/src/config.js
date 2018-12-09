import { dynamicWrapper } from 'react-router-guard';
import { checkAuth, checkResolve } from './guards';

export default [
  {
    path: '/',
    component: dynamicWrapper(() => import('./layouts/MainLayout')),
    routes: [
      {
        path: '/hello',
        component: dynamicWrapper(() => import('./pages/Test/Hello')),
      },
      {
        path: '/redirect/:testId',
        redirect: '/deny/:testId',
      },
      {
        path: '/deny',
        component: dynamicWrapper(() => import('./pages/Test/Deny')),
      },
      {
        path: '/reject',
        canActivate: [checkAuth],
        component: dynamicWrapper(() => import('./pages/Test/Reject')),
      },
      {
        path: '/resolve',
        canActivate: [checkResolve],
        component: dynamicWrapper(() => import('./pages/Test/Resolve')),
      },
    ],
  },
];
