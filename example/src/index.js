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
