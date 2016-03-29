'use strict';

import React from 'react';
import JobsCurrentActions from '../actions/JobsCurrentActions';
import Job from './Job'

class JobsCurrentItem extends React.Component {

  render() {
    return (
      <div className="current-job-item">
        <Job
          job={this.props.job}
        />
        <div className="job-remove">
          <button
            className="ui button"
            onClick={this.props.handleJob}>
            {this.props.button}
          </button>
        </div>
      </div>
    )
  }
}

export default JobsCurrentItem;
