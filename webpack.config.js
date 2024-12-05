const path = require('path');

module.exports = {
  entry: './src/index.ts',

  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // debugging help e.g. for next.js: https://github.com/gregberge/loadable-components/issues/276#issuecomment-823797962
    globalObject: `typeof self !== 'undefined' ? self : this`,
    library: 'react-lib-webpack',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts']
  },

  externals: {
    react: 'react'
  }
};
