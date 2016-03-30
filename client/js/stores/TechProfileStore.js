'use strict';

import alt from '../utils/Alt';
import TechProfileActions from '../actions/TechProfileActions';
import toastr from 'toastr';

class TechProfileStore {

  constructor() {
    this.bindActions(TechProfileActions);
    this.profile = {};
    this.editState = false;
  }

  onUpdateLocation(e) {
    this.profile.location = e.target.value;
  }

  onUpdateBio(e) {
    this.profile.bio = e.target.value;
  }

  onUpdatePhone(e) {
    this.profile.phone = e.target.value;
  }

  onToggleEdit() {
    this.editState = !this.editState;
  }

  onFetchProfileSuccess(res) {
    this.profile.location = res.data.location;
    this.profile.bio = res.data.bio;
    this.profile.phone = res.data.phone;
  }

  onUpdateProfileSuccess(cb) {
    setTimeout(cb, 0)
    toastr.success('Profile updated successfully.')
  }
}

export default alt.createStore(TechProfileStore);
