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

  jobCreate(title, description, location, uid) {
    axios
      .post('/api/job/create', {
        title: title,
        description: description,
        location: location,
        uid: uid // job creator ID
      })
      .then((data) => {
        this.actions.jobCreatedSuccess(data);
      })
  }
}

export default alt.createActions(JobActions);
