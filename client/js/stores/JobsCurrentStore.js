'use strict';

import alt from '../utils/Alt';
import JobsCurrentActions from '../actions/JobsCurrentActions';

class JobsCurrentStore {
  constructor() {
    this.bindActions(JobsCurrentActions);
    this.currentJobs = [];
  }

  onFetchCurrentJobsSuccess(res) {
    this.currentJobs = res.data;
  }

  onRemoveCurrentJobSuccess(res) {
    console.log(res.data.message);
    let jobs = this.currentJobs
    let id = res.data.id
    for(var i=0; i < jobs.length; i++) {
      if(jobs[i]._id === id) {
        delete this.currentJobs[i]
      }
    }
  }
}

export default alt.createStore(JobsCurrentStore);
