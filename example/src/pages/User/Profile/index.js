import React from 'react';

function Profile(props) {
  const { children } = props;

  return (
    <div>
      <h3>User profile page</h3>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Profile;
