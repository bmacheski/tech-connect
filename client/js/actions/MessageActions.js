'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class MessageActions {
  constructor() {
    this.generateActions(
      ''
    )
  }

  sendTechMessage(id, name, message) {
    axios
      .post('/api/user/message')
      .then(() => {
        this.actions.
      })
  }
}

export default alt.createActions(MessageActions);
