import React from 'react';
import { Route } from 'react-router-dom';

import AsyncComponent from '@/components/AsyncComponent';

export type Props = {
  path: string;
  render: (props) => void;
  canActivate?: Array<Promise<Function>>;
  exact?: boolean;
  strict?: boolean;
  guardData: object;
};

function Component(args: Props) {
  const { render, ...props } = args;

  return (
    <>
      {render(props)}
    </>
  );
}

class RouteGuard extends React.Component<Props> {
  static defaultProps: {
    canActivate: [],
    exact: false;
    strict: false,
  };

  renderAsync(props) {
    const { render, canActivate } = this.props;

    return (
      <AsyncComponent {...props} promise={canActivate}>
        <Component
          {...props}
          render={render}
        />
      </AsyncComponent>
    );
  }

  renderChildren = (props) => {
    const { render, canActivate, guardData } = this.props;
    const newProps = { ...props, guardData };

    if (canActivate && canActivate.length > 0) {
      return this.renderAsync(newProps);
    }

    return (
      <>
        {render(newProps)}
      </>
    );
  };

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

export default RouteGuard;
