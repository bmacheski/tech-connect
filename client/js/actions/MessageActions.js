'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class MessageActions {

  constructor() {
    this.generateActions(
      'updateMessage',
      'messageSendSuccess'
    )
  }

  sendMessage(id, message, date, sid) {
    axios
      .post('/api/user/message', {
        id: id,
        message: message,
        date: date,
        sid: sid
      })
      .then((res) => {
        this.actions.messageSendSuccess(res)
      })
  }
}

export default alt.createActions(MessageActions);
