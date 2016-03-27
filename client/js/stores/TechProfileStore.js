'use strict';

import alt from '../utils/Alt';
import TechProfileActions from '../actions/TechProfileActions';

class TechProfileStore {

  constructor() {
    this.bindActions(TechProfileActions);
    this.profile = {}
    this.editState = false;
  }

  onUpdateLocation(e) {
    this.profile.location = e.target.value;
  }

  onUpdateBio(e) {
    this.profile.bio = e.target.value;
  }

  onToggleEdit() {
    this.editState = !this.editState;
  }

  onFetchProfileSuccess(res) {
    this.profile.location = res.data.location;
    this.profile.bio = res.data.bio;
  }
}

export default alt.createStore(TechProfileStore);
