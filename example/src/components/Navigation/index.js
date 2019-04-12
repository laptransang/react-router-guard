import React from 'react';
import { NavLink } from 'react-router-guard';
// import { BrowserRouter } from 'react-router-dom';

function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <li><NavLink to="/" activeClassName="selected" exact>Home page</NavLink></li>
        <li><NavLink to="/resolve" activeClassName="selected">Check resolve page</NavLink></li>
        <li><NavLink to="/reject" activeClassName="selected">Check reject page</NavLink></li>
        <li><NavLink to="/redirect/12" activeClassName="selected">Test redirect page</NavLink></li>
      </ul>
    </div>
  );
}

export default Navigation;
