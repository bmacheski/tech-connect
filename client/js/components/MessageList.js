'use strict';

import React from 'react';
import MessageListActions from '../actions/MessageListActions';
import MessageListStore from '../stores/MessageListStore';
import UserStore from '../stores/UserStore';
import MessageListItem from './MessageListItem';
import cookie from 'react-cookie';

class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = MessageListStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handleMarkAsRead = this.handleMarkAsRead.bind(this);
  }

  componentWillMount() {
    let email = UserStore.getState().user;

    MessageListStore.listen(this.onChange);
    MessageListActions.fetchMessages(email);
  }

  componentWillUnmount() {
    MessageListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleMarkAsRead(message) {
    MessageListActions.updateMessageStatus(message._id);
  }

  renderMessagesList() {
    { return this.state.messages.length ?
      (
        this.state.messages.map((message) => {
          return (
            <MessageListItem
              key={message._id}
              message={message}
              markRead={this.handleMarkAsRead.bind(this, message)}
            />
          )
        })
      ) : (
        <h2> There are no messages in your inbox.</h2>
      )
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className="ui celled list">
          <h1 className="ui dividing header">Current Messages</h1>
          {this.renderMessagesList()}
        </div>
      </div>
    )
  }
}

export default MessageList;
