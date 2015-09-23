'use strict';

import React from 'react';
import cookie from 'react-cookie';

class Home extends React.Component {
  render() {
    let name = cookie.load('name')
    return (
      <div className="ui container holder">
        <h1><span>Welcome {name}!</span></h1>
      </div>
    )
  }
};

export default Home;
