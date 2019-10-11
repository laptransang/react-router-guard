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
  history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
  loading: true,
  history: null,
};

function RouterGuard(props) {
  const { config, loading, history } = props;

  return (
    <Router history={history || browserHistory}>
      <DataContext.Provider value={{ loading }}>
        {routes(config)}
      </DataContext.Provider>
    </Router>
  );
}

RouterGuard.propTypes = propTypes;
RouterGuard.defaultProps = defaultProps;

export default RouterGuard;
