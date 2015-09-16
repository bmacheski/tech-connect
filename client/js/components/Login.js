'use strict';

import React from 'react';

class Login extends React.Component {
  render() {
    return (
    <div className="login-form" >
      <h1> Login </h1>
      <button className="ui google plus button g-button">
        <i className="google plus icon"></i>
        <a href='/auth/google'>Log in with Google</a>
      </button>
    </div>
    )
  }
};

export default Login;
