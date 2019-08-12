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
React Router Guard is a fully solution for react router system, that provide react router config, route-based code splitting and authentication router for you with simple syntax used, 
react-router-guard helps you save a lot of time to setup a react router system, for more information please read [demo](https://codesandbox.io/s/5wr9ow6xlk) and [docs](/docs/guides/Content.md)

## Usage
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterGuard } from 'react-router-guard';
import config from './config';

function App() {
  return (
    <div className="App">
      <RouterGuard config={config} loading hashMode={false}  />
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
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
      <tr>
          <td>Config</td>
          <td>Array[Object]</td>
          <td></td>
          <td>The config for render all route</td>
      </tr>
      <tr>
          <td>loading</td>
          <td>Boolean|React.Element</td>
          <td>true</td>
          <td>The loading config for router</td>
      </tr>
      <tr>
          <td>hashMode</td>
          <td>Boolean</td>
          <td>false</td>
          <td>The hashMode config for switch between hash /#/ and no hash /</td>
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
