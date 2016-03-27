'use strict';

import alt from '../utils/Alt';
import MessageActions from '../actions/MessageActions';
import toastr from 'toastr'

class MessageStore {

  constructor() {
    this.bindActions(MessageActions);
    this.message = '';
  }

  onUpdateMessage(e) {
    this.message = e.target.value;
  }

  onMessageSendSuccess(res) {
    this.messageSendSuccessStatus = res.data.message;
    this.message = '';

    toastr.success(this.messageSendSuccessStatus)
  }
}

export default alt.createStore(MessageStore);
