# react-router-guard
> React router guard

[![NPM](https://img.shields.io/npm/v/react-router-guard.svg)](https://www.npmjs.com/package/react-router-guard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
**npm**

```bash
npm install --save react-router-guard
```
**yarn**
```bash
yarn add react-router-guard
```

## Features
* It look like react-router-config but more powerfully.
* Support lazy loading, code splitting.
* Support Authentication check canActivate Route Guards.
    * If success you can pass object data from api via props routeData.
    * If failed you can redirect to url you want.
* Support template master config for nested children route.
* Support loading UI component when route in lazy mode or wait api in guard.

* Support dynamic redirect with params:
    *  ```javascript
          {
            path: '/redirect/:testId',
            exact: true,
            redirect: '/deny/:testId',
          }
        ```


## Notes
- You must install react-router-dom before using it, because it use peerDependencies to reduce package-size


## Demo
[Demo](https://codesandbox.io/s/5wr9ow6xlk)

<img width="500" src="https://drive.google.com/uc?id=1ztKLqPMLzgrnYK-nSznwkls-1l4VqCYU" />

## Usage
You can check detail in folder example in github or short code bellow:

The config object:
```jsx
import { dynamicWrapper } from 'react-router-guard';
import { checkAuth, checkResolve } from './guards';

export default [
  {
    path: '/user',
    component: dynamicWrapper(() => import('./layouts/UserLayout')),
    routes: [
      {
        path: '/user/profile',
        component: dynamicWrapper(() => import('./pages/User/Profile')),
        routes: [
          {
            path: '/user/profile/a',
            component: dynamicWrapper(() => import('./pages/User/Detail')),
          },
        ],
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
        path: '/redirect/:testId',
        redirect: '/deny/:testId',
      },
      {
        path: '/reject',
        canActivate: [checkAuth],
        component: dynamicWrapper(() => import('./pages/Test/Reject')),
      },
      {
        path: '/resolve',
        canActivate: [checkAuth, checkResolve],
        component: dynamicWrapper(() => import('./pages/Test/Resolve')),
      },
    ],
  },
];

```

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RouterGuard from 'react-router-guard';
import config from './config';
// import { CustomLoading } from './components';

import './styles.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <RouterGuard config={config} loading={CustomLoading} /> */}
        <RouterGuard config={config} />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById('root'); // eslint-disable-line
ReactDOM.render(<App />, rootElement);
```
## Props
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>config</td>
          <td>Object</td>
          <td></td>
          <td>The config for render route.</td>
      </tr>
      <tr>
          <td>loading</td>
          <td>Boolean|ReactNode</td>
          <td>true</td>
          <td>Set false to hide loading or you can pass custom loading component</td>
      </tr>
    </tbody>
</table>

## License

MIT © [laptransang](https://github.com/laptransang)
=======
React Router Guard
