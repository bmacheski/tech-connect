'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class MessageActions {
  constructor() {
    this.generateActions(
      'techMessageSuccess',
      'updateName',
      'updateMessage'
    )
  }

  sendTechMessage(id, name, message) {
    axios
      .post('/api/user/message', {
        id: id,
        name: name,
        message: message
      })
      .then(() => {
        console.log('boomm!!!')
      })
  }
}

export default alt.createActions(MessageActions);
