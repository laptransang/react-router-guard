import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterGuard from 'react-router-guard';
import config from './config';

class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello</h1>
        <BrowserRouter>
          <RouterGuard config={config} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
