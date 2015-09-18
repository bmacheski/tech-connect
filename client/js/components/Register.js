'use strict';

import React from 'react';

/**
 * Component where users can register as technicians
 */

class Register extends React.Component {
  render() {
    return (
      <form className="ui fluid form">
        <div className="field">
          <label>Name</label>
          <input
            placeholder="Name"
            type="text">
          </input>
        </div>
        <div className="field">
          <label>Location</label>
          <input
            placeholder="Location"
            type="text">
          </input>
        </div>
        <div className="field">
          <label>Skills</label>
          <textarea
            placeholder="List any particular technical areas of specialization"
            type="text">
          </textarea>
        </div>
        <button className="ui submit button" type="submit">Register</button>
      </form>
    )
  }
};

export default Register;
