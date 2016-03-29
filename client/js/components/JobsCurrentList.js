'use strict';

import React from 'react';
import JobsCurrentStore from '../stores/JobsCurrentStore';
import JobsCurrentActions from '../actions/JobsCurrentActions';
import JobsCurrentItem from './JobsCurrentItem';
import UserStore from '../stores/UserStore';

class JobsCurrent extends React.Component {

  constructor(props) {
    super(props);
    this.state = JobsCurrentStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    let id = UserStore.getState().user;

    JobsCurrentStore.listen(this.onChange);
    JobsCurrentActions.fetchCurrentJobs(id);
  }

  componentWillUnmount() {
    JobsCurrentStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  removeCompletedJob(job) {
    JobsCurrentActions.removeCompletedJob(job._id);
  }

  renderJobsCompletedList() {
    let buttonTitle = 'Remove';

    { return this.state.currentJobs.length ?
      (
        this.state.currentJobs.map((job) => {
          return (
            <JobsCurrentItem
              key={job._id}
              job={job}
              handleJob={this.removeCompletedJob.bind(this, job)}
              button={buttonTitle}
            />
          )
        })
      ) : (
        <h2>There are currently no completed jobs.</h2>
      )
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className="ui celled list">
          <h1 className="ui dividing header">My Posted Jobs</h1>
          {this.renderJobsCompletedList()}
        </div>
      </div>
    )
  }
};

export default JobsCurrent;
