'use strict';

import alt from '../utils/Alt';
import AcceptJobListActions from '../actions/AcceptJobListActions';
import toastr from 'toastr';

class AcceptJobListStore {

  constructor() {
    this.bindActions(AcceptJobListActions);
    this.acceptedJobs = [];
  }

  onFetchAllJobsSuccess(res) {
    this.acceptedJobs = res.data;
  }

  onFetchAllJobsFailure(err) {
    toastr.error(err);
  }
}

export default alt.createStore(AcceptJobListStore);
