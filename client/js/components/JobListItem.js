'use strict';

import React from 'react';
import JobListActions from '../actions/JobListActions';
import cookie from 'react-cookie';

class JobListItem extends React.Component {
  acceptJob() {
    let id = cookie.load('id');
    let title = this.props.job.title;
    let description = this.props.job.description;
    let location = this.props.job.location;
    JobListActions.acceptJob(id, title, description, location);
  }
  render() {
    return (
      <div className="item">
        <div className="header"><span>Title:  </span>{this.props.job.title}</div>
        <div className="content"><span>Description:  </span>{this.props.job.description}</div>
        <div className="content"><span>Location:  </span>{this.props.job.location}</div>
        <div className="ui button" onClick={this.acceptJob.bind(this)}>Add</div>
      </div>
    )
  }
};

export default JobListItem;
