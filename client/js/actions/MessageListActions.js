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

  fetchMessages(email) {
    axios
      .get(`/api/user/message/${email}`)
      .then((res) => {
        this.actions.fetchMessagesSuccess(res)
      })
  }

  removeMessage(id, userId) {
    axios
      .post('/api/job/message', {
        mid: id,
        userId: userId
      })
      .then((res) => {
        this.actions.removeMessageSuccess(id);
     })
  }
}

export default alt.createActions(MessageListActions);
