const path = require('path');
const OUTPATH = path.join(__dirname, './example')

const config = {
  context: __dirname,
  entry: {
    app: './example/app.js'
  },
  output: {
    path: OUTPATH,
    filename: '[name].min.js',
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
  externals: {
    'jquery': 'jQuery',
  },
  devServer: {
    process: true,
    color: true,
    hot: true,
  }
}

module.exports = config;
