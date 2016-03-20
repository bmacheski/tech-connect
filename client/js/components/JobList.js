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

  _closeBox() {
    alt.recycle(JobListStore)
  }

  _renderJobList() {
    let openJobs = this.state.jobs.filter((job) => { return job.status === 'Open' });

    if (openJobs.length) {
      return this.state.jobs.map((job) => {
        return <JobListItem key= {job._id} job={job} />
      })
    } else {
      return <h2>There aren't any available postings.</h2>
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className={this.state.hideState}>
          <i
            className="close icon"
            onClick={this._closeBox}></i>
          <p>{this.state.acceptJobMessage}</p>
        </div>
        <div className="ui celled list">
          <h1>All Available Jobs</h1>
          {this._renderJobList()}
        </div>
      </div>
    )
  }
}

export default JobList;
