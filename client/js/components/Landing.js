'use strict';

import React from 'react';

class Landing extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="ui container">
          <h1 className="banner-title">Have your home technology fixed quickly and reliably.</h1>
          <a href="#/login">
            <button className="ui inverted button login-register">Login</button>
          </a>
        </div>
      </div>
    )
  }
};

export default Landing;
