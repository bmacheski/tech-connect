'use strict';

import React from 'react';
import AcceptJobListItem from './AcceptJobListItem';
import AcceptJobListActions from '../actions/AcceptJobListActions';
import AcceptJobListStore from '../stores/AcceptJobListStore';
import cookie from 'react-cookie';

class AcceptJobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = AcceptJobListStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    let id = cookie.load('id')
    AcceptJobListStore.listen(this.onChange);
    AcceptJobListActions.fetchAllJobs(id);
  }

  componentWillUnmount() {
    AcceptJobListStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state)
  }

  _renderAcceptedJobList() {
    if (this.state.acceptedJobs.length) {
      return this.state.acceptedJobs.map((job) => {
        return <AcceptJobListItem key={job._id} job={job} />
      })
    } else {
      return <h2>You currently don't have any accepted jobs</h2>
    }
  }

  render() {
    return (
      <div className="ui container holder">
        <div className="ui celled list accept-list">
          <h1>Accepted Jobs</h1>
          {this._renderAcceptedJobList()}
        </div>
      </div>
    )
  }
}

export default AcceptJobList;
