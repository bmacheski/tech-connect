'use strict';

import React from 'react';

class TechProfile extends React.Component {

  render() {
    return (
      <div>
        <div className="ui dividing header">
        <h1>Technician Profile</h1>
        <button
          className="ui button edit-profile"
          onClick={this.props.edit}>
          Edit Profile
        </button>
        </div>
        <h3>Bio</h3>
        <p>{this.props.profile.bio}</p>
        <h3>Location</h3>
        <p>{this.props.profile.location}</p>
        <h3>Phone number</h3>
        <p>{this.props.profile.phone}</p>
      </div>
    )
  }
};

export default TechProfile;
