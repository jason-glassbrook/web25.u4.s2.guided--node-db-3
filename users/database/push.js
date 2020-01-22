const db = require ('./db')

module.exports =
  (value) => (
    db ('users')
    .insert (value)
  )
