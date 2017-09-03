const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '..'),

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },

  resolve: {
    modules: ['node_modules', './']
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: path.resolve('dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
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
              resources: path.join('style', '_constants.scss'),
            }
          }
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};