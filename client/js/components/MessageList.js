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

  _renderMessagesList() {
    if (this.state.messages.length) {
      return this.state.messages.map((message) => {
        return (
          <MessageListItem
            key={message._id}
            message={message} />
        )
      })
    } else {
      return <h2> There are no messages in your inbox.</h2>
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className="ui celled list">
          <h1>Current Messages</h1>
          {this._renderMessagesList()}
        </div>
      </div>
    )
  }
}

export default MessageList;
