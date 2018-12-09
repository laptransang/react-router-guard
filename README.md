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
- Support router config object.
- Support layout config for nested routes (You can config template master for each route)
- Support promise checking guard permission to access route (You can set url redirect when condition does not match)
- Support dynamic redirect with params ex: '/patchToRedirRect/:pageId';


## Notes
- You must install react-router-dom before using it, because it use peerDependencies to reduce package-size

## Usage
You can check folder example in github or code bellow:
```jsx
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import RouterGuard from 'react-router-guard';
import config from './config';

class Example extends Component {
  render () {
    return (
      <>
        <h1>Hello Viet Nam</h1>
        <BrowserRouter>
          <RouterGuard config={config} />
        </BrowserRouter>      
      </>
    )
  }
}
```

The config object you can check this example

```jsx
import { dynamicWrapper } from 'react-router-guard';
import { checkAuth, checkPayment } from './guards';

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
        canActivate: checkAuth,
        component: dynamicWrapper(() => import('./pages/Test/Admin')),
      },
      {
        path: '/test/abc',
        canActivate: [checkAuth, checkPayment],
        component: dynamicWrapper(() => import('./pages/Test/Abc')),
      },      
    ],
  },
];

```

This is a example layout for route

```jsx
import React from 'react';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <h3>Main Layout</h3>
        {children}
      </div>
    );
  }
}

export default MainLayout;
```

## License

MIT © [laptransang](https://github.com/laptransang)
=======
React Router Guard
