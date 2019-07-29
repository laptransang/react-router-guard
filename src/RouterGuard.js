import React from 'react';
import PropTypes from 'prop-types';
import { Router, HashRouter } from 'react-router-dom';

import { routes, history, loadingService } from 'services';

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

  loadingService.set(loading);

  return hashMode ? (<HashRouter>{routes(config)}</HashRouter>) : (<Router history={history}>{routes(config)}</Router>);
}

RouterGuard.propTypes = propTypes;
RouterGuard.defaultProps = defaultProps;

export default RouterGuard;
