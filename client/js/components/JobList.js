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
    let jobList = this.state.jobs.map((job) => {
      return (
        <JobListItem key= {job._id} job={job} />
      )
    })
    return (
      <div className="ui container holder">
        <div className="ui celled list">
          <h1>All Available Jobs</h1>
          {jobList}
        </div>
      </div>
    )
  }
}

export default JobList;
