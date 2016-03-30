'use strict';

import React from 'react';
import TechProfileActions from '../actions/TechProfileActions';
import TechProfileStore from '../stores/TechProfileStore';
import TechProfile from '../components/TechProfile'

class ViewProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = TechProfileStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    let email = this.getUserEmail();

    TechProfileStore.listen(this.onChange);
    TechProfileActions.fetchProfile(email);
  }

  componentWillUnmount() {
    TechProfileStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  getUserEmail() {
    return this.context.router.getCurrentParams().tech;
  }

  render() {
    let { profile } = this.state
    let edit = false;

    return (
      <div className="ui container holder">
        <h1>View Profile</h1>
        <TechProfile
          edit={edit}
          profile={profile}
        />
      </div>
    )
  }
}

ViewProfile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default ViewProfile;
