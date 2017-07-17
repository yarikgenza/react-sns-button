const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-sns-button': path.join(__dirname, '..', '..', '..', 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};