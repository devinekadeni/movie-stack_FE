const express = require('express')
const helmet = require('helmet')
const PORT = process.env.PORT || 3000
const initializeServerEnv = require(`./${process.env.NODE_ENV}.server`)

const app = express()

app.use(helmet())
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      baseUri: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-eval'"],
      objectSrc: ["'self'"],
      fontSrc: ["'self'", 'https:', 'data:'],
      frameAncestors: ["'self'"],
      imgSrc: ["'self'", 'https://image.tmdb.org', 'data:'],
      styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
    },
  })
)
initializeServerEnv(app, express)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server run on port ${PORT}`)
})
