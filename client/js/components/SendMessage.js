'use strict';

import React from 'react';
import MessageStore from '../stores/MessageStore';
import MessageActions from '../actions/MessageActions';
import alt from '../utils/Alt';
import moment from 'moment';

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = MessageStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    MessageStore.listen(this.onChange);
  }

  componentWillUnmount() {
    MessageStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  removeBox() {
    alt.recycle(MessageStore)
  }

  submitMessage(e) {
    e.preventDefault();

    this.router = this.context.router;

    let sid = this.router.getCurrentParams().senderId;
    let date = moment().format("dddd, MMMM Do YYYY");
    let message = this.state.message;

    if (message) {
      MessageActions.sendMessage(sid, message, date);
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className={this.state.hideState}>
          <i
            className="close icon"
            onClick={this.removeBox}>
          </i>
          <p>{this.state.messageSendSuccessStatus}</p>
        </div>
        <form
          className="ui fluid form"
          onSubmit={this.submitMessage.bind(this)}>
          <div className="field">
            <label>Message</label>
            <textarea
              placeholder="Message"
              value={this.state.message}
              onChange={MessageActions.updateMessage}>
            </textarea>
          </div>
          <button
            className="ui submit button"
            type="submit">
            Submit Message
          </button>
        </form>
      </div>
    )
  }
};

SendMessage.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default SendMessage;
