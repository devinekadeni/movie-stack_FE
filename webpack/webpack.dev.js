const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.common')

const APP_DIR = path.resolve(process.cwd(), 'src')

const webpackDev = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(APP_DIR, 'index.js'),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
}

module.exports = merge(webpackBase, webpackDev)
