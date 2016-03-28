'use strict';

import React from 'react';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';
import UserStore from '../stores/UserStore';
import cookie from 'react-cookie';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    HomeStore.listen(this.onChange);
    HomeActions.fetchJobsCount();
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let userState = UserStore.getState().user;
    let isTech = userState && userState.isTech ? userState.isTech : ''

    { return isTech === true ?
      (
        <div className="ui container holder">
          <h1><span>Welcome {name}!</span></h1>
          <h2 className="count-not">
           {this.state.count === 1 ?
            "There is one new job!" :
            this.state.count > 1 ?
            "There are " + this.state.count + " new jobs!" :
            "There aren't any new jobs just yet!"}
          </h2>
        </div>
      ) : (
        <div className="ui container holder">
          <h1><span>Welcome!</span></h1>
          <h1>If you need to have anything fixed head on over and post a job so that
          a technician will be able to help!</h1>
        </div>
      )
    }
  }
}

export default Home;
