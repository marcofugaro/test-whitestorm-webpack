const webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    path: __dirname + '/js',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  externals: {
    '../physics/index.js': 'var false',
    './physics/index.js': 'var false'
  }
};
