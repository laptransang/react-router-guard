import React from 'react';
import ImageLoading from '../../assets/img/loading.svg';

function Loading() {
  return (
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
      <img style={{ width: '50px' }} src={ImageLoading} alt="" />
    </div>
  );
}

export default Loading;
