'use strict';

import React from 'react';
import UserStore from '../stores/UserStore';
import TechProfileActions from '../actions/TechProfileActions';
import TechProfileStore from '../stores/TechProfileStore';
import TechProfile from './TechProfile';
import ProfileEdit from './ProfileEdit';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = TechProfileStore.getState();
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
  }

  componentWillMount() {
    let email = UserStore.getState().user;

    TechProfileStore.listen(this.onChange);

    if (!Object.keys(this.state.profile).length) {
      TechProfileActions.fetchProfile(email);
    }
  }

  componentWillUnmount() {
    TechProfileStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  toggleEdit() {
    TechProfileActions.toggleEdit();
  }

  updateProfile() {
    let email = UserStore.getState().user;
    let bio = this.state.profile.bio;
    let location = this.state.profile.location;

    TechProfileActions.updateProfile(email, bio, location, () => {
      TechProfileActions.toggleEdit();
    })
  }

  renderProfile() {
    if (!this.state.editState) {
      return (
        <TechProfile
          profile={this.state.profile}
          edit={this.toggleEdit}
        />
      )
    } else {
      return (
        <ProfileEdit
          profile={this.state.profile}
          cancel={this.toggleEdit}
          edit={this.updateProfile}
          updateLocation={TechProfileActions.updateLocation}
          updateBio={TechProfileActions.updateBio}
        />
      )
    }
  }

  render() {
    return (
     <div className="ui container holder">
      {this.renderProfile()}
     </div>
    )
  }
};

export default Profile;
