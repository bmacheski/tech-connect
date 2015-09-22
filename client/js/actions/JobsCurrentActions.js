'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class JobsCurrentActions {
  constructor() {
    this.generateActions(
      'fetchCurrentJobsSuccess'
    )
  }

  fetchCurrentJobs() {
    axios
      .get('/api/job/current')
      .then((data) => {
        this.actions.fetchCurrentJobsSuccess(data);
      })
  }
}

export default alt.createActions(JobsCurrentActions);
