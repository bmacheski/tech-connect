'use strict';

import React from 'react';

class JobsCurrentItem extends React.Component {
  removeJob() {
    console.log('job removed!')
  }

  render() {
    return (
      <div className="item">
        <div className="content"><span>Title: </span>{this.props.job.title}</div>
        <div className="content"><span>Description: </span>{this.props.job.description}</div>
        <div className="content"><span>Date Posted: </span>{this.props.job.date}</div>
        <div className="tiny ui button repl-button" onClick={this.removeJob.bind(this)}>Remove</div>
      </div>
    )
  }
}

export default JobsCurrentItem;
