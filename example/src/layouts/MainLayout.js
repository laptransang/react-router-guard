import React from 'react';
import { SideBar, Navigation } from '../components';

function MainLayout(props) {
  const { children } = props;

  return (
    <div className="MainLayout">
      <h1>Main Layout</h1>
      <Navigation />
      <div className="Row">
        <div className="LeftCol"><SideBar /></div>
        <div className="RightCol">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
