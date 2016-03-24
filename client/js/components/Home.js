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
    // let userState = UserStore.getState().user;
    // let name = userState.name;
    // let isTech = userState.isTech;
    let isTech = true;

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
          <h1><span>Welcome {name}!</span></h1>
        </div>
      )
    }
  }
};

export default Home;
