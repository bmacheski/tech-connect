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
    let { user, isTech } = this.loadUserData();

    UserStore.listen(this.onChange);
    UserActions.setUserData(user, isTech);
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  loadUserData() {
    let user = cookie.load('user');
    let isTech = cookie.load('isTech');
    return { user: user, isTech: isTech }
  }

  logout() {
    let router = this.context.router;

    UserActions.removeCurrentUser(() => {
      router.transitionTo('login');
    });
  }

  render() {
    let user = this.state.user;
    let isTech = this.state.isTech;

    // Unauthenticated users navigation view
    if (!user) {
      return (
        <div className="ui inverted menu navbar page grid">
          <nav className="logo-container">
            <a className="item" href="#">Tech Connect</a>
          </nav>
          <div className="right menu">
            <a className="item" href="#/about">About</a>
            <a className="item" href="#/login">Sign Up</a>
            <a className="item" href="#/login">Log In</a>
          </div>
        </div>
      )
    }
    // Technicians navigation view
    if (user && isTech) {
      return (
        <div className="ui inverted menu navbar page grid">
          <nav className="logo-container">
            <a className="item" href="#">Tech Connect</a>
          </nav>
          <div className="right menu">
            <a className="item" href="#/home">Home</a>
            <a className="item" href="#/about">About</a>
            <a className="item" href="#/profile">Profile</a>
            <a className="item" href="#/job/list">View Jobs</a>
            <a className="item" href="#/user/review">Reviews</a>
            <a className="item" href="#/job/accepted">Dashboard</a>
            <a className="item" href="#/user/messages">Messages</a>
            <a className="item" onClick={this.logout.bind(this)}>Logout</a>
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
            <a className="item" href="#/home">Home</a>
            <a className="item" href="#/register/tech">Become a Technician</a>
            <a className="item" href="#/job/create">Post a Job</a>
            <a className="item" href="#/job/current">Dashboard</a>
            <a className="item" href="#/user/messages">Messages</a>
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
