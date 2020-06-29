const express = require('express')
const helmet = require('helmet')
const PORT = process.env.PORT || 3000
const initializeServerEnv = require(`./${process.env.NODE_ENV}.server`)

const app = express()

app.use(helmet())
initializeServerEnv(app, express)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server run on port ${PORT}`)
})
