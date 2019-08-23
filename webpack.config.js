const path = require('path');

module.exports = {
  entry: './client/src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        resolve: {
          extensions: ['.js', '.jsx'],
          test: /\.m?jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-object-rest-spread'],
            },
          },
        },
      },
    ],
  },
};
