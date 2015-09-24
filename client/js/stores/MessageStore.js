'use strict';

import alt from '../utils/Alt';
import MessageActions from '../actions/MessageActions';

class MessageStore {
  constructor() {
    this.bindActions(MessageActions);
    this.message = '';
    this.hideState = 'hidden';
  }

  onUpdateMessage(e) {
    this.message = e.target.value;
  }

  onMessageSendSuccess(res) {
    this.messageSendSuccessStatus = res.data.message;
    this.hideState = 'ui info message';
  }
}

export default alt.createStore(MessageStore);
