'use strict';

import React from 'react';

class MessageListItem extends React.Component {
  render() {
    return (
      <div className="item">
        <div className="header"><span>From:  </span>{this.props.message.name}</div>
        <div className="content"><span>Message: </span>{this.props.message.message}</div>
      </div>
    )
  }
}

export default MessageListItem;
