const path = require('path');
const OUTPATH = path.join(__dirname, './dist')

const config = {
  context: __dirname,
  entry: {
    index: './src/lock-scroll.js',
    app: './example/app.js'
  },
  output: {
    path: OUTPATH,
    filename: '[name].js',
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  },
  resolve: {
    extensions: ['', '.js'],
  },
  devServer: {
    process: true,
    color: true,
    hot: true
  }
}


module.exports = config;
