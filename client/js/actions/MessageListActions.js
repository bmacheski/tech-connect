'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class MessageListActions {
  constructor() {
    this.generateActions(
      'fetchMessagesSuccess',
      'removeMessageSuccess'
    )
  }

  fetchMessages() {
    axios
      .get('/api/user/message/all')
      .then((res) => {
        this.actions.fetchMessagesSuccess(res)
      })
  }

  removeMessage(id) {
    axios
      .post('/api/job/message', {
        mid: id
      })
      .then((data) => {
        this.actions.removeMessageSuccess(data);
     })
  }
}

export default alt.createActions(MessageListActions);
