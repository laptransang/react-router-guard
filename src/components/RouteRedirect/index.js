import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { checkReplaceUrlMatch } from 'utils/helpers';

const propTypes = {
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  redirect: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
};

const defaultProps = {
  exact: true,
  strict: false,
};

function RouteRedirect(props) {
  const { path, exact, strict, redirect } = props;
  return (
    <Route
      path={path}
      exact={exact}
      strict={strict}
      render={props => (
        <Redirect
          from={path}
          to={{
            ...props.location,
            pathname: checkReplaceUrlMatch(redirect, props.match),
          }}
          exact={exact}
          strict={strict}
        />
      )}
    />
  );
}

RouteRedirect.propTypes = propTypes;
RouteRedirect.defaultProps = defaultProps;

export default RouteRedirect;
