import React from 'react';
import { renderRoutes } from './services';

class RouterGuard extends React.Component {
  render() {
    const { config } = this.props;

    return renderRoutes(config, {});
  }
}

export default RouterGuard;
