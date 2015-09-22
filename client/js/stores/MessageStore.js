'use strict';

import alt from '../utils/Alt';
import MessageActions from '../actions/MessageActions';

class MessageStore {
  constructor() {
    this.bindActions(MessageActions);
    this.message = '';
  }

  onUpdateMessage(e) {
    this.message = e.target.value;
  }
}

export default alt.createStore(MessageStore);
