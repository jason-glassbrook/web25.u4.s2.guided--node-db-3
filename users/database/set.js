const db = require ('./db')

module.exports =
  (id, value) => (
    db ('users')
    .where ({ id })
    .update (value)
  )
