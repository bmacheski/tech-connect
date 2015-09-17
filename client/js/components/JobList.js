'use strict';

import React from 'react';
import JobListActions from '../actions/JobListActions';
import JobListStore from '../stores/JobListStore';
import JobListItem from './JobListItem';

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = JobListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    JobListStore.listen(this.onChange);
    JobListActions.fetchJobs();
  }

  componentWillUnmount() {
    JobListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var jobList = this.state.jobs.map((job) => {
      return (
        <JobListItem key= {job._id} job={job} />
      )
    })
    return (
      <div className="ui middle aligned divided list">
        <h1>Available Jobs</h1>
        {jobList}
      </div>
    )
  }
}

export default JobList;
