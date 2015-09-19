'use strict';

import React from 'react';
import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions';
import cookie from 'react-cookie';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = UserStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    let id = cookie.load('id');
    let data = {id: id};
    UserStore.listen(this.onChange);
    UserActions.setCurrentUser(data);
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  logout() {
    let router = this.context.router;
    UserActions.removeCurrentUser();
    cookie.remove('id');
    router.transitionTo('login');
  }

  render() {
    if (cookie.load('id') === undefined) {
      return (
        <div className="ui inverted menu navbar page grid">
          <nav className="logo-container">
            <a className="item" href="#">Tech Connect</a>
          </nav>
          <div className="right menu">
            <a className="item" href="#/login">Sign Up</a>
            <a className="item" href="#/login">Log In</a>
          </div>
        </div>
      )
    }
    else
      return (
        <div className="ui inverted menu navbar page grid">
          <nav className="logo-container">
            <a className="item" href="#">Tech Connect</a>
          </nav>
          <div className="right menu">
            <a className="item" href="#/register/tech">Become a Technician</a>
            <a className="item" href="#/job/create">Post a Job</a>
            <a className="item" href="#/job/list">View Jobs</a>
            <a className="item" href="#/job/accepted">Accepted Jobs</a>
            <a className="item" onClick={this.logout.bind(this)}>Logout</a>
          </div>
        </div>
    )
  }
};

Navbar.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Navbar;
