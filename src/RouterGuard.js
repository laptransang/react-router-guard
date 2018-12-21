import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes, loadingService } from './services';

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

class RouterGuard extends React.Component {
  render() {
    const { config, loading } = this.props;

    loadingService.set(loading);
    return renderRoutes(config, {});
  }
}

RouterGuard.propTypes = propTypes;
RouterGuard.defaultProps = defaultProps;

export default RouterGuard;
