'use strict';

import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="login-form">
        <h1> Create a user account </h1>
        <button className="ui google plus button g-button">
          <i className="google plus icon"></i>
            Sign up with Google
        </button>
      </div>
    )
  }
});
