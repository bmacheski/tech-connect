'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class UserActions {
  constructor() {
    this.generateActions(
      'setCurrentUser',
      'setUserDataSuccess',
      'removeCurrentUserSuccess',
    )
  }

  setCurrentUser(user) {
    return user;
  }

  setUserData(data) {
    let obj = { data: data }
    this.actions.setUserDataSuccess(obj);
  }

  removeCurrentUser(cb) {
    this.actions.removeCurrentUserSuccess(cb);
  }
}

export default alt.createActions(UserActions);
