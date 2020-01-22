const db = require ('./db')

module.exports =
  async (id) => {
    const [ record ] = await (
      db ('users')
      .where ({ id })
    )

    return record
  }
