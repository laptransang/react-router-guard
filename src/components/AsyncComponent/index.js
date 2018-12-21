import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { promiseSerial, verifyRouterData, makeCancelable } from '../../utils/helpers';
import { loadingService } from '../../services';
import Loading from '../Loading';

class AsyncComponent extends React.Component {
  static propTypes = {
    promise: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
    children: PropTypes.node.isRequired,
    history: PropTypes.object.isRequired, // eslint-disable-line
  };

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
    const { children } = this.props;
    const { data } = this.state;
    return React.Children.map(children, child => (
      React.cloneElement(child, { routeData: data })
    ));
  }

  render() {
    const { resolvedSuccess } = this.state;
    if (resolvedSuccess) {
      return <Fragment>{this.renderChildren()}</Fragment>;
    }

    return React.createElement(loadingService.get());
  }
}

export default AsyncComponent;
