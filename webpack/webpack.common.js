const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PUBLIC_DIR = path.resolve(process.cwd(), 'public')
const DIST_DIR = path.resolve(process.cwd(), 'dist')
const APP_DIR = path.resolve(process.cwd(), 'src')

module.exports = {
  entry: path.resolve(APP_DIR, 'index.js'),
  output: {
    path: DIST_DIR,
    publicPath: '/',
  },
  resolve: {
    alias: {
      containers: path.resolve(APP_DIR, 'containers'),
      components: path.resolve(APP_DIR, 'components'),
      assets: path.resolve(APP_DIR, 'assets'),
      utils: path.resolve(APP_DIR, 'utils'),
      references: path.resolve(APP_DIR, 'references'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'assets',
              limit: 10 * 1024, // Inline files smaller than 10 kB
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(PUBLIC_DIR, 'index.html'),
      // favicon: path.resolve(PUBLIC_DIR, 'favicon.ico'),
    }),
  ],
}
