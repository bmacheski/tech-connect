'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class MessageListActions {
  constructor() {
    this.generateActions(
      'fetchMessagesSuccess'
    )
  }

  fetchMessages() {
    axios
      .get('/api/user/message/all')
      .then((res) => {
        this.actions.fetchMessagesSuccess(res)
      })
  }
}

export default alt.createActions(MessageListActions);
