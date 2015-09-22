'use strict';

import React from 'react';

class JobsCurrentItem extends React.Component {

  render() {
    return (
      <div className="item">
        <div className="content"><span>Title: </span>{this.props.job.title}</div>
        <div className="content"><span>Description: </span>{this.props.job.description}</div>
      </div>
    )
  }
}

export default JobsCurrentItem;
