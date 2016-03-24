'use strict';

import alt from '../utils/Alt';
import JobActions from '../actions/JobActions';

class JobStore {
  constructor() {
    this.bindActions(JobActions);
    this.title = '';
    this.description = '';
    this.location = '';
    this.date = '';
    this.jobPostStatus = '';
    this.hideState = 'hidden';
  }

  onJobCreateSuccess(res) {
    this.jobPostSuccessStatus = res.data.message;
    this.hideState = 'ui info message';
    this.setState({
      title: '',
      description: '',
      location: '',
      date: ''
    })
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

  onUpdateDate(date) {
    this.date = date[0];
  }
}

export default alt.createStore(JobStore);
