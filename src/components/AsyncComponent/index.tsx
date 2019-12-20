import React from 'react';
import { History } from 'history';
import Loading from '@/components/Loading';
import { promiseSerial, verifyRouterData, makeCancelable } from '@/utils/helpers';

interface Props {
  promise: () => void | Array<Promise<Function>>;
  children: React.ReactNode;
  history: History;
  guardData?: object;
}

type State = {
  data: object;
  resolvedSuccess: boolean;
}

class AsyncComponent extends React.Component<Props, State> {
  chains;

  static defaultProps = {
    guardData: {},
  };

  constructor(props) {
    super(props);
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

    return React.Children.map(children, (child: React.ReactElement) => (
      React.cloneElement(child, { guardData: { ...guardData, ...data } })
    ));
  }

  render() {
    const { resolvedSuccess } = this.state;
    if (resolvedSuccess) {
      return this.renderChildren();
    }

    return (<Loading />);
  }
}

export default AsyncComponent;
