'use strict';

import React from 'react';

class About extends React.Component {

  render() {
    return (
      <div className="ui container holder">
        <h2>What is Tech Connect?</h2>
        <p className="about p">Tech Connect was built to address the dissatisfaction with existing tools
        to connect IT professionals with home users in need of technical assistance. Tech
        Connect aims to solve this problem.
        </p>
        <h2>How does this work?</h2>
        <p className="about p">Users would like to register as technicians will need to click the "become a technician"
        tab in the navigation. They will then be able to view job postings that users submit and will then be able to initiate
        communication with clients for jobs that they would like to take on.
        </p>
      </div>
    )
  }
}

export default About;
