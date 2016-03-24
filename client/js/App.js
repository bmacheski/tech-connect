'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

import 'bower/jquery/dist/jquery.min.js';
import 'bower/semantic/dist/semantic.min.css';

Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('app'));
});
