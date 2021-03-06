'use strict';

import React from 'react';

class AcceptJobListItem extends React.Component {

  handleSend() {
    let router = this.context.router;
    let senderId = this.props.job.posted_by;

    router.transitionTo('message', { senderId: senderId });
  }

  render() {
    return (
      <div className="item message-item">
      <div className="message-container">
        <div className="header">
          <h3>Title:
          {this.props.job.title}
          </h3>
        </div>
        <div className="content">
          <span>Description:  </span>
          {this.props.job.description}
        </div>
        <div className="content">
          <span>Location:  </span>
          {this.props.job.location}
        </div>
         <div className="content">
          <span>Post date:  </span>
          {this.props.job.post_date}
        </div>
        <div className="content">
          <span>Desired job date:  </span>
          {this.props.job.job_date}
        </div>
         <div className="content">
          <span>Posted by:  </span>
          {this.props.job.posted_by}
        </div>
      </div>
        <div
          className="medium ui button repl-button user-mess"
          onClick={this.handleSend.bind(this)}>
          Send User a Message
        </div>
      </div>
    )
  }
}

AcceptJobListItem.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default AcceptJobListItem;
