'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class MessageActions {
  constructor() {
    this.generateActions(
      'techMessageSuccess',
      'updateMessage'
    )
  }

  sendMessage(id, message, date) {
    axios
      .post('/api/user/message', {
        id: id,
        message: message,
        date: date
      })
      .then(() => {
        console.log('boomm!!!')
      })
  }
}

export default alt.createActions(MessageActions);
