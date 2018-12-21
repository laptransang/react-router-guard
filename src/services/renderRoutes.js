import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; // eslint-disable-line
import withRoutes from './withRoutes';
import { checkReplaceUrlMatch } from '../utils/helpers';

export default function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        if (route.redirect) {
          return (
            <Route
              path={route.path}
              key={route.key || i}
              exact={route.exact}
              strict={route.strict}
              render={props => (
                <Redirect
                  key={route.key || i}
                  from={route.path}
                  to={{
                    ...props.location,
                    pathname: checkReplaceUrlMatch(route.redirect, props.match),
                  }}
                  exact={route.exact}
                  strict={route.strict}
                />
              )}
            />
          );
        }
        const NestedRoute = route.canActivate ? withRoutes(route) : Route;
        return (
          <NestedRoute
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => {
              const childRoutes = renderRoutes(
                route.routes,
                {} /* extraProps */,
                {
                  /* switchProps */
                  location: props.location,
                },
              );
              if (route.component) {
                return (
                  <route.component {...props} {...extraProps} route={route}>
                    {childRoutes}
                  </route.component>
                );
              }

              return childRoutes;
            }}
          />
        );
      })}
    </Switch>
  ) : null;
}
