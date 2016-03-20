'use strict';

import alt from '../utils/Alt';
import JobListActions from '../actions/JobListActions';

class JobListStore {
  constructor() {
    this.bindActions(JobListActions);
    this.jobs = [];
    this.acceptJobMessage = '';
    this.hideState = 'hidden';
  }

  onFetchJobsSuccess(res) {
    this.jobs = res.data;
  }

  onUpdateJobSuccess(res) {
    this.hideState = 'ui info message';
    this.acceptJobMessage = res.data.message;
  }
}

export default alt.createStore(JobListStore);
