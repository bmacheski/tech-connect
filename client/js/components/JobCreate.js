'use strict';

import React from 'react';
import alt from '../utils/Alt';
import JobActions from '../actions/JobActions';
import JobStore from '../stores/JobStore';
import UserStore from '../stores/UserStore';
import cookie from 'react-cookie';
import moment from 'moment';
import DatePicker from "react-date-picker";

import 'react-date-picker/index.css';

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

  removeBox() {
    alt.recycle(JobStore)
  }

  saveJob(e) {
    e.preventDefault();

    let title = this.state.title;
    let description = this.state.description;
    let location = this.state.location;
    let postDate = moment().format("dddd, MMMM Do YYYY");
    let jobDate = moment(this.state.date).format("dddd, MMMM Do YYYY");
    let id = UserStore.getState().user.id;

    if (title && description && location && postDate && jobDate) {
      JobActions.jobCreate(title, description, location, postDate, jobDate, id);
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <form className="ui fluid form" onSubmit={this.saveJob.bind(this)}>
        <div className={this.state.hideState}>
          <i className="close icon" onClick={this.removeBox}></i>
          <p>{this.state.jobPostSuccessStatus}</p>
        </div>
        <div className="title-loc">
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
        </div>
          <div className="field">
            <label>Job Description</label>
            <textarea
              placeholder="Create a short/detailed description of the issue you are facing"
              value={this.state.description}
              onChange={JobActions.updateDescription}>
            </textarea>
          </div>
          <div className="field">
            <label>Job Date</label>
            <DatePicker
              date={this.state.date}
              onChange={JobActions.updateDate}/>
          </div>
          <button className="ui submit button" type="submit">Submit Job</button>
        </form>
      </div>
    )
  }
};

export default JobCreate;
