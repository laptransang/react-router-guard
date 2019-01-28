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
It is like `react-router-config` but more advanced

- Lazyloading and code splitting
- Guard function
- Default or customized loading UI component on unfinished routing
- Template for nested route
- Dynamic redirect with parameters

## Important note

You must install react-router-dom before using it, because it use peerDependencies to reduce package-size
[Demo](https://codesandbox.io/s/5wr9ow6xlk)

<img width="500" src="https://drive.google.com/uc?id=1ztKLqPMLzgrnYK-nSznwkls-1l4VqCYU" />

## Overall Use

As an effort to group all the routing logic into one code segment to avoid too much tracing work,
the router will be operated based on a config array.

```javascript

import { dynamicWrapper } from 'react-router-guard';
import { checkAuth } from "./guard";

In the config file

export default [
  {
    path: '/',
    component: dynamicWrapper(() => import ('../page/homepage')),
  },
  {
    canActivate: checkAuth,
    path: '/',
    component: dynamicWrapper(() => import ('../page/detailpage')),
  }
]

```

app.js

``` javascript
import {BrowserRouter} from "react-router-dom";
import RouterGuard from 'react-router-guard';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RouterGuard config={config} />
            </BrowserRouter>
        </Provider>
    )
}

```

Just like that and the router will be up and running

NOTE: dynamicWrapper simply return a Loadable component. but in the future we are looking to
adding some interesting feature, such as Redux splitting

An object configurating a route consist of:


Property | Type | Required | Default | Description|
-|-|-|-|-|
path |	String |	true |	-	 |Path | to | registered container|
component |	Reactcomponent |	true |	- |	Container of the route|
canActivate |	Array	| true	| - |	Guards of the route, decide whether it is possible to navigate|
redirect |	String |	true |	- |Redirecting path|
exact	|Boolean	|true	|-	|When true, the active class/style will only be applied if the location is matched exactly.|
routes |	Array	| true |	-	 |Children routes|




## Guard function

Guard function is a promise, if the promise `resolve(true)`, current navigating pass
the guard, if it is rejected, the error string is the redirecting path.

``` javascript
import { getItemFromStorage } from "../utils/localStorage";
import { store } from "../store";

export const checkAuth = () => new Promise((resolve, reject) => {
    const storedUser = getItemFromStorage('user');
    if (!storedUser) {
        store.dispatch({
            type: 'TURN_ON_NOTICE',
            payload: {
                message: 'Please sign in to access this section',
                variant: 'error',
            }
        });
        reject(new Error('/sign-in'));
    }
    resolve(true);
});

```

## Dynamic Redirect

``` javascript
{
  path: '/redirect/:testId',
  exact: true,
  redirect: '/deny/:testId',
}

```

## License

MIT © [laptransang](https://github.com/laptransang)
=======
React Router Guard
