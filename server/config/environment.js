'use strict';

const production = require('./production')
  , development  = require('./development');

module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return development
    case 'production':
      return production
    default:
      console.error('error loading config')
  }
}
