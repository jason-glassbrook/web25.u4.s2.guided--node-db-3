const db = require ('./db')

module.exports =
  (id) => (
    db ('users')
    .where ({ id })
  )
