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
            Save Profile
          </button>
          <button
            className="ui button edit-profile"
            onClick={this.props.cancel}>
            Cancel
          </button>
        </div>
        <div className="field">
          <h3>Bio</h3>
          <textarea
            type="text"
            className="field"
            value={this.props.profile.bio}
            onChange={this.props.updateBio}>
          </textarea>
        </div>
        <h3>Location</h3>
        <input
          type="text"
          className="field"
          value={this.props.profile.location}
          onChange={this.props.updateLocation}
        />
        <h3>Phone</h3>
        <input
          type="text"
          className="field"
          value={this.props.profile.phone}
          onChange={this.props.updatePhone}
        />
      </div>
    )
  }
};

export default ProfileEdit;
