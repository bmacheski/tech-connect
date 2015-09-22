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
}

export default alt.createStore(JobsCurrentStore);
