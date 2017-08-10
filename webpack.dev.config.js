const { join } = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'webpack/hot/only-dev-server',
    './main.js'
  ],

  output: {
    path: join(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    modules: ['node_modules', './']
  },

  devtool: 'inline-source-map',

  plugins: [
    new CleanWebpackPlugin(['build'], { dry: false }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: join(__dirname, 'style', '_constants.scss'),
            }
          }
        ],
      },
    ],
  },
};