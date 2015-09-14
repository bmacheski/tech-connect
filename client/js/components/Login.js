'use strict';

import React from 'react';
import axios from 'axios';

export default React.createClass({
  render: function() {
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
});
