'use strict';

import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="ui container login-container">
        <div className="login-form" >
          <h1> Login/Register </h1>
          <a href='/auth/google'>
            <button className="ui google plus button g-button">
            <i className="google plus icon"></i>
              Log In with Google
            </button>
          </a>
        </div>
      </div>
    )
  }
};

export default Login;
