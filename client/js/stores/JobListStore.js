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

  onUpdateJobSuccess(obj) {
    let i = obj.jid;
    let index = this.jobs.map((j) => { return j._id }).indexOf(i)
    this.jobs[index].status = 'Closed';
    this.hideState = 'ui info message';
    this.acceptJobMessage = obj.res.data.message;
  }
}

export default alt.createStore(JobListStore);
