'use strict';

import alt from '../utils/Alt';
import JobsCurrentActions from '../actions/JobsCurrentActions';
import toastr from 'toastr';

class JobsCurrentStore {

  constructor() {
    this.bindActions(JobsCurrentActions);
    this.currentJobs = [];
  }

  onFetchCurrentJobsSuccess(res) {
    this.currentJobs = res.data;
  }

  onRemoveCompletedJobSuccess(id) {
    this.currentJobs = this.currentJobs.filter((job) => { return job._id !== id });

    toastr.success('Job removed successfully!');
  }
}

export default alt.createStore(JobsCurrentStore);
