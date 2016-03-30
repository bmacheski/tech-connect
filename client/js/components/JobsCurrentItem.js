'use strict';

import React from 'react';
import JobsCurrentActions from '../actions/JobsCurrentActions';
import Job from './Job'

class JobsCurrentItem extends React.Component {

  render() {
    { return this.props.job.status === 'Closed' ?
      (
        <div className="current-job-item">
          <Job
            job={this.props.job}
          />
          <div className="job-remove">
            <button
              className="tiny ui button"
              onClick={this.props.handleJob}>
              Remove
            </button>
            <button
              className="tiny ui button"
              onClick={this.props.postReview}>
              Post review
            </button>
            <button
              className="tiny ui button"
              onClick={this.props.viewProfile}>
              Technician's Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="current-job-item">
          <Job
            job={this.props.job}
          />
          <div className="job-remove">
            <button
              className="tiny ui button"
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
