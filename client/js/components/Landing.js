'use strict';

import React from 'react';
import UserStore from '../stores/UserStore';

class Landing extends React.Component {
  render() {
    let loggedIn = UserStore.getState().user ? UserStore.getState().user : '';

    { return loggedIn ?
      (
        <div className="home-container">
          <div className="ui container">
            <h1 className="banner-title">Have your home technology fixed quickly and reliably.</h1>
          </div>
        </div>
      ) : (
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
  }
};

export default Landing;
