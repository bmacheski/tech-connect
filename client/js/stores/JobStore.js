'use strict';

import alt from '../utils/Alt';
import JobActions from '../actions/JobActions';
import toastr from 'toastr';

class JobStore {

  constructor() {
    this.bindActions(JobActions);
    this.title = '';
    this.description = '';
    this.location = '';
    this.date = '';
    this.jobPostStatus = '';
  }

  onJobCreateSuccess(res) {
    this.jobPostSuccessStatus = res.data.message;
    this.setState({
      title: '',
      description: '',
      location: '',
      date: ''
    })

    toastr.success(res.data.message);
    res.fn();
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
    this.date = date
  }
}

export default alt.createStore(JobStore);
