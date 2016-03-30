'use strict';

import React from 'react';
import TechProfileActions from '../actions/TechProfileActions';

class TechProfile extends React.Component {

  toggleEdit() {
    TechProfileActions.toggleEdit();
  }

  render() {

    let body = (
      <div>
        <h3>Bio</h3>
          <p>{this.props.profile.bio}</p>
          <h3>Location</h3>
          <p>{this.props.profile.location}</p>
          <h3>Phone number</h3>
        <p>{this.props.profile.phone}</p>
      </div>
    )

    { return this.props.edit ?
      (
        <div>
          <div className="ui dividing header">
          <h1>Technician Profile</h1>
          <button
            className="ui button edit-profile"
            onClick={this.toggleEdit}>
            Edit Profile
          </button>
          </div>
          {body}
        </div>
      ) : (
        <div>
          <div className="ui dividing header">
          <h1>Technician Profile</h1>
          </div>
          {body}
        </div>
      )
    }
  }
};

export default TechProfile;
