'use strict';

import React from 'react';
import JobCurrentActions from '../actions/JobsCurrentActions';

class JobsCurrentItem extends React.Component {
  removeJob() {
    var uid = this.props.job._id;
    JobCurrentActions.removeCurrentJob(uid);
  }

  render() {
    return (
      <div className="item">
        <div className="content"><span>Title: </span>{this.props.job.title}</div>
        <div className="content"><span>Description: </span>{this.props.job.description}</div>
        <div className="content"><span>Location: </span>{this.props.job.location}</div>
        <div className="content"><span>Date Posted: </span>{this.props.job.postDate}</div>
        <div className="content"><span>Job Date: </span>{this.props.job.jobDate}</div>
        <div className="tiny ui button repl-button" onClick={this.removeJob.bind(this)}>Remove</div>
      </div>
    )
  }
}

export default JobsCurrentItem;
