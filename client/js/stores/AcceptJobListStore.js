'use strict';

import alt from '../utils/Alt';
import AcceptJobListActions from '../actions/AcceptJobListActions';
import toastr from 'toastr';

class AcceptJobListStore {

  constructor() {
    this.bindActions(AcceptJobListActions);
    this.acceptedJobs = [];
    this.loadingState = false;
  }

  onFetchAllJobsSuccess(res) {
    this.acceptedJobs = res.data;
    this.loadingState = !this.loadingState
  }

  onFetchAllJobsFailure(err) {
    toastr.error(err);
  }

  onTriggerLoading() {
    this.loadingState = !this.loadingState;
  }
}

export default alt.createStore(AcceptJobListStore);
