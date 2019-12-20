import React from 'react';
import { Router } from 'react-router-dom';

import { IConfig } from '@/models';
import Routes from '@/components/Routes';
import browserHistory from '@/utils/browserHistory';
import DataContext from '@/context/DataContext';

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
        {Routes(config)}
      </DataContext.Provider>
    </Router>
  );
}

RouterGuard.defaultProps = defaultProps;

export default RouterGuard;
