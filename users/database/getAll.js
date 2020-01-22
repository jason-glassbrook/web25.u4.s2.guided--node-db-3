const db = require ('./db')

module.exports =
  async () => {
    const records = await (
      db ('users')
    )

    return records
  }
