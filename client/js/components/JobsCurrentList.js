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

  componentDidMount() {
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

  postReview(job) {
    let tech = job.accepted_by;

    if (tech) {
      this.context.router.transitionTo(`/job/current/${tech}/review`)
    }
  }

  renderJobsCompletedList() {
    { return this.state.currentJobs.length ?
      (
        this.state.currentJobs.map(job => {
          return (
            <JobsCurrentItem
              key={job._id}
              job={job}
              postReview={this.postReview.bind(this, job)}
              handleJob={this.removeCompletedJob.bind(this, job)}
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
}

JobsCurrent.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default JobsCurrent;
