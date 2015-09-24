'use strict';

import alt from '../utils/Alt';
import MessageListActions from '../actions/MessageListActions';

class MessageListStore {
  constructor() {
    this.bindActions(MessageListActions);
    this.messages = [];
  }

  onFetchMessagesSuccess(res) {
    this.messages = res.data;
  }

  onRemoveMessageSuccess(res) {
    console.log(res.data)
    this.messages = res.data;
  }
}

export default alt.createStore(MessageListStore);
