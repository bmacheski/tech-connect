'use strict';

import React from 'react';
import alt from '../utils/Alt';
import JobActions from '../actions/JobActions';
import JobStore from '../stores/JobStore';

class JobCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = JobStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    JobStore.listen(this.onChange);
  }

  componentWillUnmount() {
    JobStore.unlisten(this.onChange);
    alt.recycle(JobStore);
  }

  onChange(state) {
    this.setState(state);
  }

  // Clears the form when it is submitted
  onSave() {
    this.setState({
      title: '',
      description: '',
      location: ''
    })
  }

  saveJob(e) {
    e.preventDefault();
    var title = this.state.title;
    var description = this.state.description;
    var location = this.state.location;
    JobActions.jobCreate(title, description, location);
    this.onSave();
  }

  render() {
    return (
      <form className="ui fluid form" onSubmit={this.saveJob.bind(this)}>
        <div className="field">
          <label>Job Title</label>
          <input type="text"
            placeholder="Job Title"
            value={this.state.title}
            onChange={JobActions.updateTitle}>
          </input>
        </div>
        <div className="field">
          <label>Job Description</label>
          <textarea
            placeholder="Job Description"
            value={this.state.description}
            onChange={JobActions.updateDescription}>
          </textarea>
        </div>
        <div className="two fields">
          <div className="field">
            <label>City</label>
            <input
              placeholder="City"
              type="text"
              value={this.state.location}
              onChange={JobActions.updateLocation}>
            </input>
          </div>
        </div>
        <button className="ui submit button" type="submit">Submit Job</button>
      </form>
    )
  }
};

export default JobCreate;
