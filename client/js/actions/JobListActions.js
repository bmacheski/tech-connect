'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class JobListActions {
  constructor() {
    this.generateActions(
      'fetchJobsSuccess'
    )
  }

  fetchJobs() {
    axios
      .get('/api/job/all')
      .then((jobs) => {
        this.actions.fetchJobsSuccess(jobs);
        console.log(jobs);
      })
  }
}

export default alt.createActions(JobListActions);
