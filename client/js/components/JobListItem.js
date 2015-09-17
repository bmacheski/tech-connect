'use strict';

import React from 'react';

class JobListItem extends React.Component {
  render() {
    return (
      <div>
        <div className="item">{this.props.job.title}</div>
        <div className="item">{this.props.job.description}</div>
        <div className="item">{this.props.job.location}</div>
      </div>
    )
  }
};

export default JobListItem;
