'use strict';

import React from 'react';
import MessageListActions from '../actions/MessageListActions';

class MessageListItem extends React.Component {
  handleReply() {
    let router = this.context.router;
    let senderId = this.props.message.senderId;
    router.transitionTo('message', {senderId: senderId});
  }

  removeMessage() {
    let mid = this.props.message._id
    MessageListActions.removeMessage(mid);
  }

  render() {
    return (
      <div className="item">
        <div className="header"><span>From:  </span>{this.props.message.name}</div>
        <div className="content"><span>Message: </span>{this.props.message.message}</div>
        <div className="content"><span>Sent: </span>{this.props.message.date}</div>
        <div className="mini ui button repl-button" onClick={this.handleReply.bind(this)}>
          <i className="reply icon"></i>
        </div>
        <div className="mini ui button" onClick={this.removeMessage.bind(this)}>
        Delete
        </div>
      </div>
    )
  }
}

MessageListItem.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default MessageListItem;
