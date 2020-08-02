const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

function initializeDevServer(app) {
  const config = require('../webpack/webpack.dev')
  const compiler = webpack(config)

  const webpackMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })

  app.use(webpackMiddleware)
  app.use(webpackHotMiddleware(compiler))

  const fs = webpackMiddleware.fileSystem

  app.get('*', (req, res) => {
    const filePath = path.join(compiler.outputPath, 'index.html')
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.sendStatus(404)
      } else {
        res.send(file.toString())
      }
    })
  })
}

module.exports = initializeDevServer
