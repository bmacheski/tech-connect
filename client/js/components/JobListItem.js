'use strict';

import React from 'react';
import JobListActions from '../actions/JobListActions';
import UserStore from '../stores/UserStore';
import cookie from 'react-cookie';
import toastr from 'toastr';

class JobListItem extends React.Component {

  acceptJob() {
    let email = UserStore.getState().user;
    let jobId = this.props.job._id;
    let title = this.props.job.title;
    let description = this.props.job.description;
    let location = this.props.job.location;
    let uid = this.props.job.uid;

    if (this.props.job.status === 'Open') {
      JobListActions.acceptJob(email, jobId, title, description, location, uid);
    } else {
      toastr.warning('That job is closed! Try another.')
    }
  }

  render() {
    return (
        <div className="list-item item">
          <div className="header">
            <h3>{this.props.job.title}</h3>
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
            className="medium ui button repl-button repl-div"
            onClick={this.acceptJob.bind(this)}>
            Add
          </div>
        </div>
      )
  }
}

export default JobListItem;
