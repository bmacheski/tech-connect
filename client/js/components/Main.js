'use strict';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { RouteHandler } from 'react-router';
import UserActions from '../actions/UserActions';
import cookie from 'react-cookie';

import '../styles/HomeStyles.scss';

class Main extends React.Component {

  componentDidMount() {
    let user = cookie.load('user');
    let isTech = cookie.load('isTech')

    UserActions.setUserData(user, isTech);
  }

  render() {
    return (
      <div className="ui grid">
        <Navbar />
        <div className="main-container">
          <RouteHandler {...this.props} />
        </div>
      </div>
    )
  }
};

export default Main;
