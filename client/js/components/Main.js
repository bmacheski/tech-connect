'use strict';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { RouteHandler } from 'react-router';
import '../styles/HomeStyles.scss';

export default React.createClass({
  render: function() {
    return (
      <div className="ui grid">
        <Navbar />
        <div className="ui main text container">
          <RouteHandler />
        </div>
        <Footer />
      </div>
    )
  }
});

