'use strict';

import React from 'react';
import JobListActions from '../actions/JobListActions';
import cookie from 'react-cookie';

class JobListItem extends React.Component {
  acceptJob() {
    let id = cookie.load('id');
    let jobId = this.props.job._id;
    let title = this.props.job.title;
    let description = this.props.job.description;
    let location = this.props.job.location;
    let uid = this.props.job.uid;

    JobListActions.acceptJob(id, jobId, title, description, location, uid);
  }

  render() {
    if (this.props.job.status === 'Open') {
      return (
        <div className="item">
          <div className="header">
            <span>Title:  </span>
            {this.props.job.title}
          </div>
          <div className="content">
            <span>Description:  </span>
            {this.props.job.description}
          </div>
          <div className="content">
            <span>Location:  </span>
            {this.props.job.location}
          </div>
          <div className="content">
            <span>Preferred Date:  </span>
            {this.props.job.jobDate}
          </div>
          <div className="content">
            <span>Status:  </span>
            {this.props.job.status}
          </div>
          <div
            className="tiny ui button repl-button"
            onClick={this.acceptJob.bind(this)}>
            Add
          </div>
        </div>
      )
  }
    else
      return <div />
  };
}
export default JobListItem;
