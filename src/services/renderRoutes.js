import React from 'react';
import { Switch } from 'react-router-dom';

import RouteGuard from 'components/RouteGuard';
import RouteRedirect from 'components/RouteRedirect';

function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        if (route.redirect) {
          return (
            <RouteRedirect
              key={route.key || i}
              path={route.path}
              exact={route.exact}
              strict={route.strict}
              redirect={route.redirect}
            />
          );
        }

        return (
          <RouteGuard
            key={route.key || i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            canActivate={route.canActivate}
            render={(props) => {
              const childRoutes = renderRoutes(
                route.routes,
                {} /* extraProps */,
                {
                  /* switchProps */
                  location: props.location, // eslint-disable-line
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

export default renderRoutes;
