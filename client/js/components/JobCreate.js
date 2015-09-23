'use strict';

import React from 'react';
import alt from '../utils/Alt';
import JobActions from '../actions/JobActions';
import JobStore from '../stores/JobStore';
import cookie from 'react-cookie';
import moment from 'moment';

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
    let title = this.state.title;
    let description = this.state.description;
    let location = this.state.location;
    let date = moment().format("dddd, MMMM Do YYYY");
    let id = cookie.load('id');
    JobActions.jobCreate(title, description, location, date, id);
    this.onSave();
  }

  render() {
    return (
      <div className="ui container holder">
        <form className="ui fluid form" onSubmit={this.saveJob.bind(this)}>
         <div className="field">
            <label>Title</label>
            <input type="text"
              placeholder="Enter a short title"
              value={this.state.title}
              onChange={JobActions.updateTitle}>
            </input>
          </div>
          <div className="field">
            <label>Location</label>
            <input
              placeholder="Enter the location of the job"
              type="text"
              value={this.state.location}
              onChange={JobActions.updateLocation}>
            </input>
          </div>
          <div className="field">
            <label>Job Description</label>
            <textarea
              placeholder="Create a short/detailed description of the issue you are facing"
              value={this.state.description}
              onChange={JobActions.updateDescription}>
            </textarea>
          </div>
          <button className="ui submit button" type="submit">Submit Job</button>
        </form>
      </div>
    )
  }
};

export default JobCreate;
