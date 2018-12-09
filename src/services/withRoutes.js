import React from 'react';
import { Route } from 'react-router-dom';
import AsyncComponent from '../components/AsyncComponent';

export default function withRoutes(route) {
  const Component = (args) => {
    const { render, ...props } = args;
    return render(props);
  };

  return (args) => {
    const { render, ...rest } = args;

    return (
      <Route
        {...rest}
        render={props => (
          <AsyncComponent {...props} promise={route.canActivate}>
            <Component {...props} route={route} render={render} />
          </AsyncComponent>
        )}
      />
    );
  };
}