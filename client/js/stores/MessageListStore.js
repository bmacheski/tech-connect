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

  onRemoveMessageSuccess(id) {
    this.messages = this.messages.filter(m => { return m._id !== id });
  }

  onUpdateMessageStatusSuccess(id) {
    let idx = this.messages.map(m => { return m._id }).indexOf(id);
    this.messages[idx].status = 'Read';
  }
}

export default alt.createStore(MessageListStore);
