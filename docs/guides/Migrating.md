# Migrating from v1 to v2

React Router Guard v2 is a complete rewrite, so there is not a simple migration path. This guide will provide you with a number of steps to help you understand how to upgrade your application.

## The Router

Now we have include package react-router-dom into react-router-guard so you need to remove react-router-dom in your package.json

```jsx
// NPM
$ npm uninstall react-router-dom
$ npm install react-router-guard

// Yarn
$ yarn remove react-router-dom
$ yarn add react-router-guard
```

Change your import from react-router-dom 

```jsx
import {  BrowserRouter, Route, withRoute, Switch, Redirect, Link, NavLink } from  'react-router-dom';
```

to react-router-guard

```jsx
import {  BrowserRouter, Route, withRoute, Switch, Redirect, Link, NavLink } from  'react-router-guard';
```

Remove BrowserRouter from your index file, now the syntax is

```jsx
import { RouterGuard }  from 'react-router-guard';
import config from './config';

function App() {
    return (
        <RouterGuard config={config} />
    )
}
```
