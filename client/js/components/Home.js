'use strict';

import React from 'react';
import HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';
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
    let name = cookie.load('name');
    if (cookie.load('isTech') === true) {
      return (
        <div className="ui container holder">
          <h1><span>Welcome {name}!</span></h1>
          <h2 className="count-not">
           {this.state.count === 1 ?
            'This is one new job!' :
            this.state.count > 1 ?
            'There are ' + this.state.count + ' new jobs!' :
            "There aren't any new jobs just yet!"}
          </h2>
        </div>
      )
    }
    else return <div className="ui container holder">
      <h1><span>Welcome {name}!</span></h1>
    </div>
  }
};

export default Home;
