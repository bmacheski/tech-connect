'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class AcceptJobListActions {
  constructor() {
    this.generateActions(
      'fetchAllJobsSuccess',
      'fetchAllJobsFailure',
      'fetchProfileSuccess'
    )
  }

  fetchAllJobs(email) {
    axios
      .get(`/api/acceptjobs/${email}`)
      .then(data => {
        this.actions.fetchAllJobsSuccess(data);
      })
      .catch(err => {
        this.actions.fetchAllJobsFailure(err);
      })
  }
}

export default alt.createActions(AcceptJobListActions);
