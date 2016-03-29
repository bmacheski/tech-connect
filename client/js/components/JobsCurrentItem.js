'use strict';

import React from 'react';
import JobsCurrentActions from '../actions/JobsCurrentActions';
import Job from './Job'

class JobsCurrentItem extends React.Component {

  render() {
    if (this.props.job.status === 'Closed') {

      return (
        <div className="current-job-item">
          <Job
            job={this.props.job}
          />
          <div className="job-remove">
            <button
              className="ui button"
              onClick={this.props.handleJob}>
              Remove
            </button>
            <button
              className="ui button"
              onClick={this.props.postReview}>
              Post review
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="current-job-item">
          <Job
            job={this.props.job}
          />
          <div className="job-remove">
            <button
              className="ui button"
              onClick={this.props.handleJob}>
              Remove
            </button>
          </div>
        </div>
      )
    }
  }
}

export default JobsCurrentItem;
