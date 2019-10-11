import React from 'react';
import ReactDOM from 'react-dom';
import { RouterGuard } from 'react-router-guard';
// import { createHashHistory } from 'history';
// import { CustomLoading } from './components';
import 'antd/dist/antd.css';
import config from './config';

import './styles.css';

function App() {
  // const history = createHashHistory();

  return (
    <div className="App">
      {/* <RouterGuard config={config} loading={CustomLoading} /> */}
      <RouterGuard
        config={config}
        // history={history}
      />
    </div>
  );
}

const rootElement = document.getElementById('root'); // eslint-disable-line
ReactDOM.render(<App />, rootElement);
