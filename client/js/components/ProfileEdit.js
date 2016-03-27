'use strict';

import React from 'react';

class ProfileEdit extends React.Component {

  render() {
    return (
      <div className="ui form">
        <div className="ui dividing header">
          <h1>Edit Profile</h1>
          <button
            className="ui button edit-profile"
            onClick={this.props.edit}>
            Edit Profile
          </button>
        </div>
        <div className="field">
          <h3>Bio</h3>
          <input
            type="text"
            className="field"
            value={this.props.profile.bio}
            onChange={this.props.updateBio}
          />
        </div>
        <h3>Location</h3>
        <input
          type="text"
          className="field"
          value={this.props.profile.location}
          onChange={this.props.updateLocation}
        />
      </div>
    )
  }
};

export default ProfileEdit;
