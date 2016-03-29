'use strict';

import React from 'react';
import TechProfileActions from '../actions/TechProfileActions';
import TechProfileStore from '../stores/TechProfileStore';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';
import cookie from 'react-cookie';

/**
 *  Register as technician
 */

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = TechProfileStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TechProfileStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TechProfileStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  saveProfile(e) {
    e.preventDefault();

    let email = UserStore.getState().user;
    let location = this.state.profile.location;
    let bio = this.state.profile.bio;
    let phone = this.state.profile.phone;
    let router = this.context.router;

    TechProfileActions.createProfile(email, location, bio, phone);

    router.transitionTo('home');
  }

  render() {
    return (
      <div className="ui container holder">
        <h2 className="ui dividing header">Register as a technician</h2>
        <form
          className="ui fluid form"
          onSubmit={this.saveProfile.bind(this)}>
          <div className="field">
            <h3>
              <label>Location</label>
            </h3>
            <input
              placeholder="Location"
              value={this.state.location}
              type="text"
              onChange={TechProfileActions.updateLocation}>
            </input>
          </div>
          <div className="field">
            <h3>
              <label>Phone number</label>
            </h3>
            <input
              placeholder="Phone number"
              value={this.state.phone}
              type="text"
              onChange={TechProfileActions.updatePhone}>
            </input>
          </div>
          <div className="field">
            <h3>
              <label>Bio</label>
            </h3>
            <textarea
              placeholder="Create a short overview of your background in technology."
              value={this.state.bio}
              type="text"
              onChange={TechProfileActions.updateBio}>
            </textarea>
          </div>
          <button
            className="ui submit button"
            type="submit">Register
          </button>
        </form>
      </div>
    )
  }
};

Register.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Register;
