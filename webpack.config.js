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
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/inline\-worker/, 'webworkify-webpack'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        hoist_funs: false, // Turn this off to prevent errors with Ammo.js
        warnings: false
      },
      minimize: true
    })
  ]
};
