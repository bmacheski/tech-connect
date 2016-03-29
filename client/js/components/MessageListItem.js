'use strict';

import React from 'react';
import MessageListActions from '../actions/MessageListActions';
import UserStore from '../stores/UserStore';

class MessageListItem extends React.Component {

  handleReply() {
    let router = this.context.router;
    let senderId = this.props.message.sender_id;

    router.transitionTo('message', { senderId: senderId });
  }

  removeMessage() {
    let mid = this.props.message._id;
    let userId = UserStore.getState().user;

    MessageListActions.removeMessage(mid, userId);
  }

  render() {
    return (
      <div className="message-item">
        <div className="item message-container">
          <div className="header">
              <h3>From:  </h3>
              {this.props.message.sender_id}
          </div>
          <div className="content">
            <h3>Message: </h3>
            {this.props.message.message}
          </div>
          <div className="content">
            <h3>Sent: </h3>
            {this.props.message.date}
          </div>
          <div className="content">
            <h3>Status: </h3>
            {this.props.message.status}
          </div>
        </div>
        <div className="mas-read">
          <button
            className="medium ui button repl-button"
            onClick={this.handleReply.bind(this)}>
            Reply
          </button>
          <button
            className="medium ui button"
            onClick={this.props.markRead}>
            Mark as read
          </button>
          <button
            className="medium ui button"
            onClick={this.removeMessage.bind(this)}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}

MessageListItem.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default MessageListItem;
