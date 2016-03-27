'use strict';

import React from 'react';
import alt from '../utils/Alt';
import JobActions from '../actions/JobActions';
import JobStore from '../stores/JobStore';
import UserStore from '../stores/UserStore';
import cookie from 'react-cookie';
import moment from 'moment';
import Datetime from 'react-datetime';
import toastr from 'toastr';

import 'react-datetime/css/react-datetime.css'

class JobCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = JobStore.getState();
    this.onChange = this.onChange.bind(this);
    this.transition = this.transition.bind(this);
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

  removeBox() {
    alt.recycle(JobStore)
  }

  transition() {
    this.context.router.transitionTo('currentjobs');
  }

  saveJob(e) {
    e.preventDefault();

    let title = this.state.title;
    let description = this.state.description;
    let location = this.state.location;
    let dateFormat = 'MMMM Do YYYY, h:mm a';
    let postDate = moment().format(dateFormat);
    let jobDate = moment(this.state.date).format(dateFormat);
    let email = UserStore.getState().user;
    let fn = this.transition;

    if (title && description && location && postDate && jobDate) {
      JobActions.jobCreate(title, description, location, postDate, jobDate, email, fn);
    } else {
      toastr.warning('All fields need to be filled out.');
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <h2 className="ui dividing header">Post a job</h2>
        <form
          className="ui fluid form"
          onSubmit={this.saveJob.bind(this)}>
        <div className="title-loc">
         <div className="field">
            <h3>
              <label>Title</label>
            </h3>
            <input
              type="text"
              placeholder="Enter a short title"
              value={this.state.title}
              onChange={JobActions.updateTitle}>
            </input>
          </div>
          <div className="field">
            <h3>
              <label>Address</label>
            </h3>
            <input
              placeholder="Enter the address of the job (Ex: 123 Happy Ln., Nashville, TN 37201)"
              type="text"
              value={this.state.location}
              onChange={JobActions.updateLocation}>
            </input>
          </div>
        </div>
          <div className="field">
            <h3>
              <label>Job Description</label>
            </h3>
            <textarea
              placeholder="Create a short/detailed description of the issue you are facing"
              value={this.state.description}
              onChange={JobActions.updateDescription}>
            </textarea>
          </div>
          <div className="field">
            <h3>
              <label>Job Date</label>
            </h3>
            <Datetime
              value={this.state.date}
              onChange={JobActions.updateDate}
            />
          </div>
          <button
            className="ui submit button"
            type="submit">
            Submit Job
          </button>
        </form>
      </div>
    )
  }
};

JobCreate.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default JobCreate;


