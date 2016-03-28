'use strict';

import React from 'react';
import MessageStore from '../stores/MessageStore';
import MessageListStore from '../stores/MessageListStore';
import UserStore from '../stores/UserStore';
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

  submitMessage(e) {
    e.preventDefault();

    this.router = this.context.router;

    let senderId = this.router.getCurrentParams().senderId;
    let date = moment().format('dddd, MMMM Do YYYY');
    let message = this.state.message;
    let sid = UserStore.getState().user;

    if (message) {
      MessageActions.sendMessage(senderId, message, date, sid);
    }
  }

  renderTitle() {
    return this.context.router.getCurrentParams().senderId;
  }

  render() {
    return (
      <div className="ui container holder">
        <h1 className="ui dividing header">Create a message</h1>
        <h3>To: {this.renderTitle()}</h3>
        <form
          className="ui fluid form"
          onSubmit={this.submitMessage.bind(this)}>
          <div className="field">
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
