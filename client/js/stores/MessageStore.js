'use strict';

import alt from '../utils/Alt';
import MessageActions from '../actions/MessageActions';

class MessageStore {
  constructor() {
    this.bindActions(MessageActions);
    this.messages = [];
  }
}

export default alt.createStore(MessageStore);
