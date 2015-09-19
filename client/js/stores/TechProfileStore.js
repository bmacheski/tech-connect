'use strict';

import alt from '../utils/Alt';
import TechProfileActions from '../actions/TechProfileActions';

class TechProfileStore {
  constructor() {
    this.bindActions(TechProfileActions);
    this.location = '';
    this.bio = '';
  }

  onUpdateLocation(e) {
    this.location = e.target.value;
  }

  onUpdateBio(e) {
    this.bio = e.target.value;
  }
}

export default alt.createStore(TechProfileStore);
