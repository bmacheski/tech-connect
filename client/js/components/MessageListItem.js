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
      <div>
        <div className="item message-container">
          <div className="header">
              <span>From:  </span>
              {this.props.message.sender_id}
          </div>
          <div className="content">
            <span>Message: </span>
            {this.props.message.message}
          </div>
          <div className="content">
            <span>Sent: </span>
            {this.props.message.date}
          </div>
          <div className="content">
            <span>Sent: </span>
            {this.props.message.status}
          </div>
        </div>
        <div className="mas-read">
          <button
            className="medium ui button repl-button"
            onClick={this.handleReply.bind(this)}>
            Reply
          </button>
          <button className="medium ui button">Mark as read</button>
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
