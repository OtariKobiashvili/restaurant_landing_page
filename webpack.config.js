const path = require("path");

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'app')
};

module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000
  }
}
