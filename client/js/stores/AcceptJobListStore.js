'use strict';

import alt from '../utils/Alt';
import AcceptJobListActions from '../actions/AcceptJobListActions';

class AcceptJobListStore {
  constructor() {
    this.bindActions(AcceptJobListActions);
    this.acceptedJobs = [];
  }

  onFetchAllJobsSuccess(res) {
    this.acceptedJobs = res.data;
  }
}

export default alt.createStore(AcceptJobListStore);
