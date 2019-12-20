import React from 'react';

import NoLoading from '@/components/NoLoading';
import DataContext from '@/context/DataContext';

import imageLoading from './img/loading.svg';

class Loading extends React.Component {
  renderLoading = () => (
    <div
      className="react-router-guard-loading"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 900,
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img style={{ width: '50px' }} src={imageLoading} alt="" />
    </div>
  );

  render() {
    const { loading } = this.context;

    if (!loading) {
      return (<NoLoading />);
    }

    if (loading === true) {
      return this.renderLoading();
    }

    return loading;
  }
}

Loading.contextType = DataContext;

export default Loading;
