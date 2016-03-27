'use strict';

import React from 'react';
import AcceptJobListItem from './AcceptJobListItem';
import AcceptJobListActions from '../actions/AcceptJobListActions';
import AcceptJobListStore from '../stores/AcceptJobListStore';
import UserStore from '../stores/UserStore';
import cookie from 'react-cookie';


class AcceptJobList extends React.Component {

  constructor(props) {
    super(props);
    this.state = AcceptJobListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    let email = UserStore.getState().user

    AcceptJobListStore.listen(this.onChange);
    AcceptJobListActions.fetchAllJobs(email);
  }

  componentWillUnmount() {
    AcceptJobListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  renderAcceptedJobList() {
    { return this.state.acceptedJobs.length ?
      (
        this.state.acceptedJobs.map((job) => {
          return (
            <AcceptJobListItem
              key={job._id}
              job={job}
            />
          )
        })
      ) : (
        <h2>You currently don't have any accepted jobs</h2>
      )
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className="ui celled list accept-list">
          <h1 className="ui dividing header">Accepted Jobs</h1>
          {this.renderAcceptedJobList()}
        </div>
      </div>
    )
  }
}

export default AcceptJobList;
