var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: "./client/js/App.js",
  output: {
    filename: "./client/public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin()
  ]
};
