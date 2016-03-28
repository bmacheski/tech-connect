'use strict';

import alt from '../utils/Alt';
import axios from 'axios';

class MessageListActions {

  constructor() {
    this.generateActions(
      'fetchMessagesSuccess',
      'removeMessageSuccess',
      'updateMessageStatusSuccess'
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

  updateMessageStatus(messageId) {
    axios
      .put(`/api/user/message/${messageId}`)
      .then(() => {
        this.actions.updateMessageStatusSuccess(messageId);
      })
  }
}

export default alt.createActions(MessageListActions);
