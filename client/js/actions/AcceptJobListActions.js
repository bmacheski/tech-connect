'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class AcceptJobListActions {
  constructor() {
    this.generateActions(
      'fetchAllJobsSuccess'
    )
  }

  fetchAllJobs(id) {
    axios
      .get(`/api/acceptjobs/${id}`)
      .then((data) => {
        this.actions.fetchAllJobsSuccess(data);
      })
  }
}

export default alt.createActions(AcceptJobListActions);
