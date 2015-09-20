'use strict';

import React from 'react';

class SendMessage extends React.Component {
  submitMessage() {
    console.log('message sent!')
  }
  render() {
    return (
      <form className="ui fluid form" onSubmit={this.submitMessage.bind(this)}>
        <div className="field">
          <label>Name</label>
          <input type="text"
            placeholder="Name">
          </input>
        </div>
        <div className="field">
          <label>Message</label>
          <textarea
            placeholder="Message">
          </textarea>
        </div>
        <button className="ui submit button" type="submit">Submit Message</button>
      </form>
    )
  }
};

export default SendMessage;
