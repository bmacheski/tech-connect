'use strict';

import alt from '../utils/Alt';
import MessageActions from '../actions/MessageActions';

class MessageStore {
  constructor() {
    this.bindActions(MessageActions);
    this.name = '';
    this.message = '';
  }

  onUpdateName(e) {
    this.name = e.target.value;
  }

  onUpdateMessage(e) {
    this.message = e.target.value;
  }
}

export default alt.createStore(MessageStore);
