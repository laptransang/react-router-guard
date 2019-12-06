import React from 'react';
import { Router } from 'react-router-dom';
import DataContext from '@/context/DataContext';

import { routes, browserHistory } from '@/services';
import { IConfig } from '@/models';

const defaultProps = {
  loading: true,
  history: null,
};

type Props = {
  config: IConfig;
  history?: null | Object;
  loading?: boolean | React.ReactElement;
} & typeof defaultProps;

function RouterGuard(props: Props) {
  const { config, loading, history } = props;

  return (
    <Router
      history={history || browserHistory}
    >
      <DataContext.Provider value={{ loading }}>
        {routes(config)}
      </DataContext.Provider>
    </Router>
  );
}

RouterGuard.defaultProps = defaultProps;

export default RouterGuard;
