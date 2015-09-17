'use strict';

import alt from '../utils/Alt';
import JobListActions from '../actions/JobListActions';

class JobListStore {
  constructor() {
    this.bindActions(JobListActions);
    this.jobs = [];
  }

  // When jobs are retrieved from api store them in array
  onFetchJobsSuccess(res) {
    this.jobs = res.data;
  }
}

export default alt.createStore(JobListStore);
