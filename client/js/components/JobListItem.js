'use strict';

import React from 'react';

class JobListItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="content">{this.props.job.title}</div>
        <div className="content">{this.props.job.description}</div>
        <div className="content">{this.props.job.location}</div>
      </div>
    )
  }
};

export default JobListItem;
