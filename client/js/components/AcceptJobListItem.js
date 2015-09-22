'use strict';

import React from 'react';

class AcceptJobListItem extends React.Component {
  handleSend() {
    let router = this.context.router;
    let senderId = this.props.job.pid;
    router.transitionTo('message', {senderId: senderId});
  }

  render() {
    return (
      <div className="item">
        <div className="header"><span>Title:  </span>{this.props.job.title}</div>
        <div className="content"><span>Description:  </span>{this.props.job.description}</div>
        <div className="content"><span>Location:  </span>{this.props.job.location}</div>
        <div className="content"><span>ID: </span>{this.props.job.pid}</div>
        <div className="tiny ui button repl-button" onClick={this.handleSend.bind(this)}>Send User a Message</div>
      </div>
    )
  }
};

AcceptJobListItem.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default AcceptJobListItem;
