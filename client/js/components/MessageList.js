'use strict';

import React from 'react';
import MessageListActions from '../actions/MessageListActions';
import MessageListStore from '../stores/MessageListStore';
import MessageListItem from './MessageListItem';
import cookie from 'react-cookie';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = MessageListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    let id = cookie.load('id')
    MessageListStore.listen(this.onChange);
    MessageListActions.fetchMessages();
  }

  componentWillUnmount() {
    MessageListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }
  render() {
    let messageList = this.state.messages.map((message) => {
      return (
        <MessageListItem key={message._id} message={message} />
      )
    })
    return (
      <div className="ui celled list">
        <h1> Current Messages </h1>
        {messageList}
      </div>
    )
  }
}

export default MessageList;
