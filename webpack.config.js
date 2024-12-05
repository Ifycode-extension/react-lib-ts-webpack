const path = require('path');

module.exports = {
  entry: './src/index.ts',

  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // debugging help: https://github.com/gregberge/loadable-components/issues/276#issuecomment-823797962
    globalObject: 'this',
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
