'use strict';

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import JobCreate from '../components/JobCreate';
import JobList from '../components/JobList';

import { Router, DefaultRoute, Route } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="login" path="/login" handler={Login} />
    <Route name="register" path="/login" handler={Login} />
    <Route name="techregister" path="/register/tech" handler={Register} />
    <Route name="createjob" path="/job/create" handler={JobCreate} />
    <Route name="listjobs" path="/job/list" handler={JobList} />
    <DefaultRoute handler={Home} />
  </Route>
);
