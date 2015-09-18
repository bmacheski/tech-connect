'use strict';

import alt from '../utils/Alt';
import JobListActions from '../actions/JobListActions';

class JobListStore {
  constructor() {
    this.bindActions(JobListActions);
    this.jobs = [];
  }

  onFetchJobsSuccess(res) {
    this.jobs = res.data;
  }
}

export default alt.createStore(JobListStore);
