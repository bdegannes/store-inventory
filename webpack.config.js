var path = require('path');
var webpack = require('webpack'); 

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './client/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'public/bundle.js',
  },
  plugins: [
   new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /(\.js$)|(\.jsx$)/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader',
        ],
      },
      {
        test: /\.json$/,
        loaders: ['json'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
