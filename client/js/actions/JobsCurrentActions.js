'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class JobsCurrentActions {

  constructor() {
    this.generateActions(
      'fetchCurrentJobsSuccess',
      'removeCurrentJobSuccess'
    )
  }

  fetchCurrentJobs() {
    axios
      .get('/api/job/current')
      .then((data) => {
        this.actions.fetchCurrentJobsSuccess(data);
      })
  }

  removeCurrentJob(id) {
    axios
      .post('/api/job/remove', {
        id: id
      })
      .then(() => {
        this.actions.removeCurrentJobSuccess(id);
      })
  }
}

export default alt.createActions(JobsCurrentActions);
