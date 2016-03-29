'use strict';

import React from 'react';

class Loading extends React.Component {

  render() {
    return (
      <div className="ui segment">
        <p></p>
        <div className="ui active inverted dimmer">
          <div className="ui text loader loading">Loading</div>
        </div>
      </div>
    )
  }
}

export default Loading;
