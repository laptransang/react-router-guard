import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RouterGuard from 'react-router-guard';
import config from './config';

import './styles.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterGuard config={config} />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
