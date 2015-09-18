'use strict';

import alt from '../utils/Alt';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.bindActions(UserActions);
    this.currentUser = {id: undefined};
  }
  onSetCurrentUser(payload) {
    // console.log('payload: ', payload);
    this.currentUser = {id: payload.id};
  }
}

export default alt.createStore(UserStore);
