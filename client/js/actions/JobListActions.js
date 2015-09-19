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

  acceptJob(id, title, description, location) {
    axios
      .post('/api/tech/job/accept', {
        id: id,
        title: title,
        description: description,
        location: location
      })
      .then(() => {
        console.log('job saved!')
      })
  }

 }

export default alt.createActions(JobListActions);
