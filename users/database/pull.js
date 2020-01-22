const db = require ('./db')
const get = require ('./get')

module.exports =
  async (id) => {
    const record = await get (id)

    await (
      db ('users')
      .where ({ id })
      .delete ()
    )

    return record
  }
