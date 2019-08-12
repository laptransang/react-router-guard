import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import DataContext from 'context/DataContext';

import { routes, browserHistory } from 'services';

const propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.func,
      redirect: PropTypes.string,
      exact: PropTypes.bool,
      canActivate: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.array,
      ]),
    }).isRequired,
  ).isRequired,
  loading: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  hashMode: PropTypes.bool,
};

const defaultProps = {
  loading: true,
  hashMode: false,
};

function RouterGuard(props) {
  const { config, loading, hashMode } = props;
  const history = browserHistory(hashMode);

  return (
    <Router history={history}>
      <DataContext.Provider value={{ loading }}>
        {routes(config)}
      </DataContext.Provider>
    </Router>
  );
}

RouterGuard.propTypes = propTypes;
RouterGuard.defaultProps = defaultProps;

export default RouterGuard;
