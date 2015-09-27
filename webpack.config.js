var WebpackNotifierPlugin = require('webpack-notifier')
  , path                  = require('path')
  , ResolverPlugin        = require("webpack/lib/ResolverPlugin");

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
      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'client/bower_components'],
    alias: {
      'bower': __dirname + '/client/bower_components'
    }
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ]
};
