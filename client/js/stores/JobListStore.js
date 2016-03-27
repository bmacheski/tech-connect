'use strict';

import alt from '../utils/Alt';
import JobListActions from '../actions/JobListActions';
import toastr from 'toastr';

class JobListStore {

  constructor() {
    this.bindActions(JobListActions);
    this.jobs = [];
    this.acceptJobMessage = '';
  }

  onFetchJobsSuccess(res) {
    this.jobs = res.data;
  }

  onUpdateJobSuccess(obj) {
    let i = obj.jid;
    let index = this.jobs.map((j) => { return j._id }).indexOf(i);

    this.jobs[index].status = 'Closed';
    this.acceptJobMessage = obj.res.data.message;

    toastr.success(this.acceptJobMessage);
  }
}

export default alt.createStore(JobListStore);
