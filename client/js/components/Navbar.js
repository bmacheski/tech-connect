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
    UserStore.listen(this.onChange);
    let id = cookie.load('id');
    let data = {id: id};
    console.log(id);
    UserActions.setCurrentUser(data);
  }

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="ui inverted menu navbar page grid">
        <nav className="logo-container">
          <a className="item" href="#">Tech Connect</a>
        </nav>
        <div className="right menu">
          <a className="item" href="#/register/tech">Become a Technician</a>
          <a className="item" href="#/job/create">Post a Job</a>
          <a className="item" href="#/job/list">View Jobs</a>
          <a className="item" href="#/login">Sign Up</a>
          <a className="item" href="#/login">Log In</a>
        </div>
      </div>
    )
  }
};

export default Navbar;
