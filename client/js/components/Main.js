'use strict';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { RouteHandler } from 'react-router';
import '../styles/HomeStyles.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <Navbar />
        <div className="ui main text container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
    )
  }
};

export default Main;
