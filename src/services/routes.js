import React from 'react';
import { Switch } from 'react-router-dom';

import RouteGuard from 'components/RouteGuard';
import RouteRedirect from 'components/RouteRedirect';

function Routes(routes, extraProps = {}, switchProps = {}) {
  if (routes) {
    return (
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
              guardData={extraProps.guardData}
              render={(props) => {
                const childRoutes = Routes(
                  route.routes,
                  { guardData: props.guardData } /* extraProps */,
                  {
                    /* switchProps */
                    location: props.location,
                  },
                );
                if (route.component) {
                  return (
                    <route.component {...props} route={route}>
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
    );
  }

  return null;
}

export default Routes;
