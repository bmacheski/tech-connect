var WebpackNotifierPlugin = require('webpack-notifier');

//filename: "./client/public/bundle.js"

module.exports = {
  entry: "./client/js/App.js",
  output: {
    path: "./client/public",
    publicPath: "./client/public",
    filename: "bundle.js"
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
