'use strict';

import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="ui inverted menu navbar page grid">
        <nav className="logo-container">
          <a className="item" href="#">Tech Connect</a>
        </nav>
        <div className="right menu">
          <a className="item" href="#/register/tech">Become a Technician</a>
          <a className="item" href="#/job/create">Post a Job</a>
          <a className="item" href="#/job/list">View Jobs</a>
          <a className="item" href="#/register">Sign Up</a>
          <a className="item" href="#/login">Log In</a>
        </div>
      </div>
    )
  }
};

export default Navbar;
