const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

function initializeDevServer(app) {
  const config = require('../webpack/webpack.dev')
  const compiler = webpack(config)

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  )

  app.use(webpackHotMiddleware(compiler))
}

module.exports = initializeDevServer
