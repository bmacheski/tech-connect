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

  jobCreate(title, description, location, pdate, jdate, email, cb) {
    axios
      .post('/api/job/create', {
        title: title,
        description: description,
        location: location,
        postDate: pdate,
        jobDate: jdate,
        email: email
      })
      .then((data) => {
        let o = Object.assign({}, data, { fn: cb });

        this.actions.jobCreateSuccess(o);
      })
  }
}

export default alt.createActions(JobActions);
