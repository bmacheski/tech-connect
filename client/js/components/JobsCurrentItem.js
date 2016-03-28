'use strict';

import React from 'react';
import JobsCurrentActions from '../actions/JobsCurrentActions';

class JobsCurrentItem extends React.Component {

  render() {
    return (
      <div>
        <div className="job-container">
          <div className="content">
            <h3>
            <span>Title: </span>
            {this.props.job.title}
            </h3>
          </div>
          <div className="content">
            <span>Description: </span>
            {this.props.job.description}
          </div>
          <div className="content">
            <span>Location: </span>
            {this.props.job.location}
          </div>
          <div className="content">
            <span>Date Posted: </span>
            {this.props.job.post_date}
          </div>
          <div className="content">
            <span>Job Date: </span>
            {this.props.job.job_date}
          </div>
          <div className="content">
            <span>Status: </span>
            {this.props.job.status}
          </div>
        </div>
        <div className="job-remove">
          <button
            className="ui button"
            onClick={this.props.removeJob}>
            Remove
          </button>
        </div>
      </div>
    )
  }
}

export default JobsCurrentItem;
