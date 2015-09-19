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

  render() {
    let acceptJobList = this.state.acceptedJobs.map((job) => {
      return (
        <AcceptJobListItem key= {job._id} job={job} />
      )
    })
    return (
      <div className="ui celled list">
        <h1>Accepted Jobs</h1>
        {acceptJobList}
      </div>
    )
  }
}

export default AcceptJobList;
