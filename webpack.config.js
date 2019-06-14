const path = require('path');

module.exports = {
  entry: './src/react-innertext.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'react-innertext.js',
    library: 'react-innertext',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '.'),
    umdNamedDefine: true,
    globalObject: 'this' // more details here: https://github.com/webpack/webpack/issues/6522
  }
};
