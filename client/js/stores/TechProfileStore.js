'use strict';

import alt from '../utils/Alt';
import TechProfileActions from '../actions/TechProfileActions';

class TechProfileStore {
  constructor() {
    this.bindActions(TechProfileActions);
    this.name = '';
    this.location = '';
    this.bio = '';
  }

  onUpdateName(e) {
    this.name = e.target.value;
  }

  onUpdateLocation(e) {
    this.location = e.target.value;
  }

  onUpdateBio(e) {
    this.bio = e.target.value;
  }
}

export default alt.createStore(TechProfileStore);
