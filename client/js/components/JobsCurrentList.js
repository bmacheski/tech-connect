'use strict';

import React from 'react';
import JobsCurrentStore from '../stores/JobsCurrentStore';
import JobsCurrentActions from '../actions/JobsCurrentActions';
import JobsCurrentItem from './JobsCurrentItem';

class JobsCurrent extends React.Component {
  constructor(props) {
    super(props);
    this.state = JobsCurrentStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    JobsCurrentStore.listen(this.onChange);
    JobsCurrentActions.fetchCurrentJobs();
  }

  componentWillUnmount() {
    JobsCurrentStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  renderJobsCurrentList() {
    { return this.state.currentJobs.length ?
      (
        this.state.currentJobs.map((job) => {
          return <JobsCurrentItem key={job._id} job={job} />
        })
      ) : (
        <h2>There are currently no posted jobs.</h2>
      )
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className="ui celled list">
          <h1> My Currently Available Jobs</h1>
          {this.renderJobsCurrentList()}
        </div>
      </div>
    )
  }
};

export default JobsCurrent;
