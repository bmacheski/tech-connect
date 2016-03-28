'use strict';

import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = jQuery;

require('toastr/toastr.scss');
require('semantic-ui-css/semantic.css');

Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('app'));
});
