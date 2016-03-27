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

  setUserData(data, tech) {
    let obj = { data: data, isTech: tech }

    this.actions.setUserDataSuccess(obj);
  }

  removeCurrentUser(cb) {
    this.actions.removeCurrentUserSuccess(cb);
  }
}

export default alt.createActions(UserActions);
