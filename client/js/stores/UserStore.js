'use strict';

import alt from '../utils/Alt';
import cookie from 'react-cookie';
import UserActions from '../actions/UserActions';

class UserStore {
  constructor() {
    this.bindActions(UserActions);
    this.user = null;
    // this.currentUser = { id: undefined };
  }

  onSetUserDataSuccess(obj) {
    this.user = obj.data;
  }

  onRemoveCurrentUserSuccess(cb) {
    cookie.remove('user');
    this.user = null;
    cb();
  }

  // onSetCurrentUser(payload) {
  //   this.currentUser = { id: payload.id };
  // }

  // onRemoveCurrentUser() {
  //   this.currentUser = { id: undefined };
  // }
}

export default alt.createStore(UserStore);
