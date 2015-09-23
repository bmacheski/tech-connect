'use strict';

import alt from '../utils/Alt';
import JobActions from '../actions/JobActions';

/**
 * BindActions is an Alt method which takes in an object of action symbols and binds them to
 * their specially named handlers
 */

class JobStore {
  constructor() {
    this.bindActions(JobActions);
    this.title = '';
    this.description = '';
    this.location = '';
    this.jobPostStatus = '';
  }

  onJobCreateSuccess(message) {
    console.log(message);
    this.jobPostStatus = message;
  }

  onUpdateTitle(e) {
    this.title = e.target.value;
  }

  onUpdateDescription(e) {
    this.description = e.target.value;
  }

  onUpdateLocation(e) {
    this.location = e.target.value;
  }
}

export default alt.createStore(JobStore);
