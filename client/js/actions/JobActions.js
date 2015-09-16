'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class JobActions {
  constructor() {
    this.generateActions(
      'jobCreatedSuccess',
      'updateTitle',
      'updateDescription',
      'updateLocation'
    )
  }

  jobCreate(title, description, location) {
    axios
      .post('/api/job/create', {
        title: title,
        description: description,
        location: location
      })
      .then((data) => {
        this.actions.jobCreatedSuccess(data);
      })
  }
}

export default alt.createActions(JobActions);
