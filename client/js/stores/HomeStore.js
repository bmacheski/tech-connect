'use strict';

import alt from '../utils/Alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {

  constructor() {
    this.bindActions(HomeActions);
    this.count = '';
  }

  onFetchJobsCountSuccess(res) {
    this.count = res.data.count;
  }
}

export default alt.createStore(HomeStore);
