const db = require ('./db')
const get = require ('./get')

module.exports =
  async (value) => {
    const [ id ] = await (
      db ('users')
      .insert (value)
    )

    const record = await get (id)

    return record
  }
