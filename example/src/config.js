import { dynamicWrapper } from 'react-router-guard';
import { checkAuth } from './guards';

export default [
  {
    path: '/test',
    component: dynamicWrapper(() => import('./layouts/MainLayout')),
    routes: [
      {
        path: '/test/hello',
        component: dynamicWrapper(() => import('./pages/Test/Hello')),
      },
      {
        path: '/test/redirect/:testId',
        redirect: '/test/deny/:testId',
      },
      {
        path: '/test/deny',
        component: dynamicWrapper(() => import('./pages/Test/Deny')),
      },
      {
        path: '/test/admin',
        canActivate: [checkAuth],
        component: dynamicWrapper(() => import('./pages/Test/Admin')),
      },
    ],
  },
];
