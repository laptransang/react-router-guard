import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <li><Link to="/">Home page</Link></li>
        <li><Link to="/resolve">Resolve page</Link></li>
        <li><Link to="/reject">Reject page</Link></li>
        <li><Link to="/redirect/pageId">Test redirect page</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;
