var WebpackNotifierPlugin = require('webpack-notifier');
var path                  = require('path');
var webpack               = require("webpack");
var BowerWebpackPlugin    = require('bower-webpack-plugin');

module.exports = {
  entry: "./client/js/App.js",
  output: {
    path: path.join(__dirname, '/client/public'),
    publicPath: "public/",
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
      },
      { test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new BowerWebpackPlugin({
      excludes: /.*\.less/
    }),
    new webpack.ProvidePlugin({
      $:      "jquery",
      jQuery: "jquery"
    })
  ]
};
