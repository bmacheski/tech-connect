'use strict';

import React from 'react';
import axios from 'axios';

export default React.createClass({
  handleSubmit: function() {
    axios
      .get('/auth/google')
      .then(() => {
        this.transitionTo('app')
      })
      .catch((err)=> {
        console.log(err.statusText);
      })
  },
  render: function() {
    return (
    <div className="login-form" >
      <h1> Login </h1>
      <button className="ui google plus button g-button" onClick={this.handleSubmit}>
        <i className="google plus icon"></i>
          Log in with Google
      </button>
    </div>
    )
  }
});
