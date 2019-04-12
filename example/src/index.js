import React from 'react';
import ReactDOM from 'react-dom';
import { RouterGuard } from 'react-router-guard';
// import { CustomLoading } from './components';
import config from './config';

import './styles.css';

function App() {
  return (
    <div className="App">
      {/* <RouterGuard config={config} loading={CustomLoading} /> */}
      <RouterGuard config={config} />
    </div>
  );
}

const rootElement = document.getElementById('root'); // eslint-disable-line
ReactDOM.render(<App />, rootElement);
