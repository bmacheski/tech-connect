'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class UserActions {
  constructor() {
    this.generateActions(
      'setCurrentUser',
      'removeCurrentUser'
    )
  }

  setCurrentUser(user) {
    return user;
  }
}

export default alt.createActions(UserActions);