'use strict';

import alt from '../utils/Alt';
import JobListActions from '../actions/JobListActions';
import toastr from 'toastr';

class JobListStore {

  constructor() {
    this.bindActions(JobListActions);
    this.jobs = [];
    this.acceptJobMessage = '';
    this.loadingState = false;
  }

  onFetchJobsSuccess(res) {
    this.jobs = res.data;
    this.loadingState = !this.loadingState
  }

  onUpdateJobSuccess(obj) {
    let i = obj.jid;
    let index = this.jobs.map((j) => { return j._id }).indexOf(i);

    this.jobs[index].status = 'Closed';
    this.acceptJobMessage = obj.res.data.message;

    toastr.success(this.acceptJobMessage);
  }

  onTriggerLoading() {
    this.loadingState = !this.loadingState;
  }
}

export default alt.createStore(JobListStore);
