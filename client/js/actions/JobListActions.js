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
      })
  }
  /**
   * ID refers to current logged in user (the tech) to
   * identify which tech profile the job needs to be saved
   * under.
   * PID refers to the actual job poster.
   */
  acceptJob(id, title, description, location, pid) {
    axios
      .post('/api/tech/job/accept', {
        id: id,
        title: title,
        description: description,
        location: location,
        pid: pid // poster/job creator ID
      })
      .then(() => {
        console.log('job saved!')
      })
  }

 }

export default alt.createActions(JobListActions);
