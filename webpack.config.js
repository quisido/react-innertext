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

    // bug report: https://github.com/webpack/webpack/issues/6522
    // more details: https://github.com/webpack/webpack/issues/6525
    // get solution from this comment: https://github.com/webpack/webpack/issues/6525#issuecomment-491268897
    globalObject: '(typeof self !== "undefined" ? self : this)'
  }
};
