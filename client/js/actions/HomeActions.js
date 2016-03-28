'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class HomeActions {

  constructor() {
    this.generateActions(
      'fetchJobsCountSuccess'
    )
  }

  fetchJobsCount() {
    axios
      .get('/api/job/count')
      .then((data) => {
        this.actions.fetchJobsCountSuccess(data);
      })
  }
};

export default alt.createActions(HomeActions);
