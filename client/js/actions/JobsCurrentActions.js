'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class JobsCurrentActions {

  constructor() {
    this.generateActions(
      'fetchCurrentJobsSuccess',
      'removeCompletedJobSuccess',
      'markJobAsCompleteSuccess'
    )
  }

  fetchCurrentJobs(email) {
    axios
      .get(`/api/job/current/${email}`)
      .then((data) => {
        this.actions.fetchCurrentJobsSuccess(data);
      })
  }

  removeCompletedJob(id) {
    axios
      .post('/api/job/remove', {
        id: id
      })
      .then(() => {
        this.actions.removeCompletedJobSuccess(id);
      })
  }
}

export default alt.createActions(JobsCurrentActions);
