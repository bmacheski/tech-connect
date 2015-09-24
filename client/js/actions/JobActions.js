'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class JobActions {
  constructor() {
    this.generateActions(
      'jobCreateSuccess',
      'updateTitle',
      'updateDescription',
      'updateLocation',
      'updateDate'
    )
  }

  jobCreate(title, description, location, pdate, jdate, uid) {
    axios
      .post('/api/job/create', {
        title: title,
        description: description,
        location: location,
        postDate: pdate,
        jobDate: jdate,
        uid: uid // job creator ID
      })
      .then((data) => {
        this.actions.jobCreateSuccess(data);
      })
  }
}

export default alt.createActions(JobActions);
