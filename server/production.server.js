const path = require('path')
const compression = require('compression')

const DIST_DIR = path.resolve(process.cwd(), 'dist')

function initializeProdServer(app, express) {
  app.use(compression())
  app.use(express.static(DIST_DIR))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'))
  })
}

module.exports = initializeProdServer
