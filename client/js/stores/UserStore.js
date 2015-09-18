'use strict';

import alt from '../utils/Alt';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.bindActions(UserActions);
    this.currentUser = {id: undefined};
  }

  onSetCurrentUser(payload) {
    this.currentUser = {id: payload.id};
  }

  onRemoveCurrentUser() {
    this.currentUser = {id: undefined};
  }
}

export default alt.createStore(UserStore);
