import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import AsyncComponent from '../AsyncComponent';

const propTypes = {
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  render: PropTypes.func.isRequired,
  canActivate: PropTypes.arrayOf(PropTypes.func),
  exact: PropTypes.bool,
  strict: PropTypes.bool,
};

const defaultProps = {
  canActivate: [],
  exact: false,
  strict: false,
};

const Component = (args) => {
  const { render, ...props } = args;

  return render(props);
};

class RouteGuard extends React.Component {
  renderAsync(props) {
    const { render, canActivate } = this.props;

    return (
      <AsyncComponent {...props} promise={canActivate}>
        <Component {...props} render={render} />
      </AsyncComponent>
    );
  }

  renderChildren = (props) => {
    const { render, canActivate, guardData } = this.props;
    const newProps = { ...props, guardData };

    if (canActivate && canActivate.length > 0) {
      return this.renderAsync(newProps);
    }

    return render(newProps);
  }

  render() {
    const { path, exact, strict } = this.props;

    return (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        render={this.renderChildren}
      />
    );
  }
}

RouteGuard.propTypes = propTypes;
RouteGuard.defaultProps = defaultProps;

export default RouteGuard;
