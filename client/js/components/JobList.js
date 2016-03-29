'use strict';

import React from 'react';
import JobListActions from '../actions/JobListActions';
import JobListStore from '../stores/JobListStore';
import JobListItem from './JobListItem';
import alt from '../utils/Alt';

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

  renderJobList() {
    let openJobs = this.state.jobs;

    { return openJobs.length ?
      (
      this.state.jobs.map(job => {
        return (
          <JobListItem
            key= {job._id}
            job={job}
          />
        )
      })
      ) : (
      <h2>There aren't any available postings. Check back later.</h2>
      )
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className="ui celled list">
          <h1 className="ui dividing header">All Available Jobs</h1>
          {this.renderJobList()}
        </div>
      </div>
    )
  }
}

export default JobList;
