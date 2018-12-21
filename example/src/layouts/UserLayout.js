import React from 'react';

function UserLayout(props) {
  const { children } = props;

  return (
    <div className="MainLayout">
      <h1>User Layout</h1>
      <div>
        {children}
      </div>
    </div>
  );
}

export default UserLayout;
