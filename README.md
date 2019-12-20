<h3 align="center">
  React Router Guard
</h3>

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

## Introduction
React Router Guard is a router structure base on react-router-dom, when you install react-router-guard you don't need to install (react-router-dom, history, react-loadable) because it uses these packages as dependencies, it gives you some cool feature like router-config, code splitting, router authentication support, dynamic redirect for more information please read the [demo](https://codesandbox.io/s/5wr9ow6xlk) and [docs](/docs/guides/Content.md)

## Usage
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
/*
Because we don't need to install react-router-dom so you can use Link or NavLink from 'react-router-guard'
import { RouterGuard, BrowserRouter, Link, NavLink, Redirect, Route, Router, Switch, history, withRouter, Loadable } from 'react-router-guard';
*/
import { RouterGuard } from 'react-router-guard';
import config from './config';

function App() {
  return (
    <div className="App">
      <RouterGuard config={config} />
    </div>
  );
}

const rootElement = document.getElementById('root'); // eslint-disable-line
ReactDOM.render(<App />, rootElement);
```

## API
<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>config</td>
          <td>RouterGuardConfigProps[]</td>
          <td>The config for render all route</td>
      </tr>
      <tr>
          <td>history</td>
          <td>createBrowserHistory()</td>
          <td>To use custom history</td>
      </tr>
    </tbody>
</table>

## Docs
[Migrating from 1.x to 2.x](/docs/guides/Migrating.md)

[Docs](/docs/guides/Content.md)

## Screenshot & Demo

[Demo](https://codesandbox.io/s/5wr9ow6xlk)

<img width="500" src="https://drive.google.com/uc?id=1biXJPFwo8hzA26_QQ5KgAZFf1ZoMrCnT" />

React Router Guard

## License

MIT © [TSL](https://github.com/tsl)
=======
