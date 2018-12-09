import React from 'react';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <h3>Main Layout</h3>
        {children}
      </div>
    );
  }
}

export default MainLayout;