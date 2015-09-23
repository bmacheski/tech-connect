'use strict';

 // <DefaultRoute name="home" handler={Landing} />
import React from 'react';
import Main from '../components/Main';
import Landing from '../components/Landing';
import About from '../components/About';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';
import JobsCurrentList from '../components/JobsCurrentList';
import JobCreate from '../components/JobCreate';
import JobList from '../components/JobList';
import AcceptJobList from '../components/AcceptJobList';
import SendMessage from '../components/SendMessage';
import MessageList from '../components/MessageList';
import { Router, DefaultRoute, Route } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <Route name="login" path="/login" handler={Login} />
    <Route name="register" path="/login" handler={Login} />
    <Route name="home" path="/home" handler={Home} />
    <Route name="about" path="/about" handler={About} />
    <Route name="techregister" path="/register/tech" handler={Register} />
    <Route name="createjob" path="/job/create" handler={JobCreate} />
    <Route name="currentjobs" path="/job/current" handler={JobsCurrentList} />
    <Route name="listjobs" path="/job/list" handler={JobList} />
    <Route name="acceptedjobs" path="/job/accepted" handler={AcceptJobList} />
    <Route name="message" path="/message/:senderId" handler={SendMessage} />
    <Route name="usermessages" path="/user/messages" handler={MessageList}/>
    <DefaultRoute name="landing" handler={Landing} />
  </Route>
);
