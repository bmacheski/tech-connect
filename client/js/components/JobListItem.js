'use strict';

import React from 'react';

class JobListItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="header"><span>Title:  </span>{this.props.job.title}</div>
        <div className="content"><span>Description:  </span>{this.props.job.description}</div>
        <div className="content"><span>Location:  </span>{this.props.job.location}</div>
      </div>
    )
  }
};

export default JobListItem;
