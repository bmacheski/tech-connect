'use strict';

import React from 'react';
import TechProfileActions from '../actions/TechProfileActions';
import TechProfileStore from '../stores/TechProfileStore';
import cookie from 'react-cookie';

/**
 * Component where users can register as technicians
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
    let id = cookie.load('id');
    let location = this.state.location;
    let bio = this.state.bio;
    let router = this.context.router;
    TechProfileActions.createProfile(id, location, bio);
    router.transitionTo('home');
  }

  render() {
    return (
      <form className="ui fluid form" onSubmit={this.saveProfile.bind(this)}>
        <div className="field">
          <label>Location</label>
          <input
            placeholder="Location"
            value={this.state.location}
            type="text"
            onChange={TechProfileActions.updateLocation}>
          </input>
        </div>
        <div className="field">
          <label>Bio</label>
          <textarea
            placeholder="Create a short overview of your background in technology."
            value={this.state.bio}
            type="text"
            onChange={TechProfileActions.updateBio}>
          </textarea>
        </div>
        <button className="ui submit button" type="submit">Register</button>
      </form>
    )
  }
};

Register.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Register;
