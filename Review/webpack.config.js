const path = require('path');

module.exports = {
  entry: './client/src/index.jsx',
  // externals: {
  //   "styled-components": {
  //     commonjs: "styled-components",
  //     commonjs2: "styled-components",
  //     amd: "styled-components",
  //   }
  // },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
    ],
  },
};
