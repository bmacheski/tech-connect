'use strict';

import React from 'react';

export default React.createClass({
  render: function() {
    return (
    <div className="login-form">
      <h1> Login </h1>
      <button className="ui google plus button g-button">
        <i className="google plus icon"></i>
        Log in with Google
      </button>
    </div>
    )
  }
});
