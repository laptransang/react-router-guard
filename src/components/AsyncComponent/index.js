import React from 'react';
import PropTypes from 'prop-types';

import { promiseSerial, verifyRouterData, makeCancelable } from 'utils/helpers';
import loadingService from 'services/loadingService';

const propTypes = {
  promise: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  guardData: PropTypes.objectOf(PropTypes.any),
};

const defaultProps = {
  guardData: {},
};

class AsyncComponent extends React.Component {
  constructor(props) {
    super(props);
    this.chains = null;
    this.state = {
      data: {},
      resolvedSuccess: false,
    };
  }

  componentDidMount() {
    const { promise, history } = this.props;
    const chainsFactory = promise.length ? promiseSerial(promise, this.props) : promise();

    this.chains = makeCancelable(chainsFactory);
    this.chains.promise
      .then((data) => {
        this.setState({
          data: verifyRouterData(data),
          resolvedSuccess: true,
        });
      })
      .catch((error) => {
        if (
          error
          && error.message
          && ((typeof error.message === 'object' && !error.message.isCanceled)
          || (typeof error.message === 'string' && error.message.indexOf('/') > -1))
        ) {
          history.push(error.message);
        }
      });
  }

  componentWillUnmount() {
    this.chains.cancel();
  }

  renderChildren() {
    const { children, guardData } = this.props;
    const { data } = this.state;

    return React.Children.map(children, child => (
      React.cloneElement(child, { guardData: { ...guardData, ...data } })
    ));
  }

  render() {
    const { resolvedSuccess } = this.state;
    if (resolvedSuccess) {
      return this.renderChildren();
    }

    return React.createElement(loadingService.get());
  }
}

AsyncComponent.propTypes = propTypes;
AsyncComponent.defaultProps = defaultProps;

export default AsyncComponent;
