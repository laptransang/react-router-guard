import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';

import { routes, history, loadingService } from 'services';

const propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
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
};

const defaultProps = {
  loading: true,
};

function RouterGuard(props) {
  const { config, loading } = props;

  loadingService.set(loading);

  return (
    <Router history={history}>
      {routes(config)}
    </Router>
  );
}

RouterGuard.propTypes = propTypes;
RouterGuard.defaultProps = defaultProps;

export default RouterGuard;
