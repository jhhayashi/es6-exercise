const express = require('express')

const PORT = 8080
const ERROR_CODES = [0, 400, 403, 404, 500]

const app = express()

app.use((req, res, next) => {setTimeout(next, 1000)})

if (process.env.CHALLENGE_MODE) {
  app.use((req, res, next) => {
    if (Math.round(Math.max(Math.random() - 0.25, 0))) {
      const errorCode = ERROR_CODES[Math.floor(Math.random() * 4)]
      // never send response
      if (!errorCode) return
      return res.sendStatus(errorCode)
    }
    return next()
  })
}

app.get('/numbers', (req, res) => {
  const randomNumbers = Array.from(Array(Math.floor(Math.random() * 90 + 10)))
  return res.json(randomNumbers.map(x => Math.floor(Math.random() * 100)))
})

app.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  return next(err)
})

app.use((err, req, res, next) => res.status(err.status || 500).send(err.message || ''))

const server = app.listen(PORT)
console.log('Listening at http://localhost:%s', server.address().port)

module.exports = app
