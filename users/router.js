const express = require ('express')

const database = {
  'users' : require ('../users/database')
}

const router = express.Router ()

router.get ('/', (req, res) => {
  database['users'].getAll ()
  .then (users => {
    res.json (users)
  })
  .catch (err => {
    res.status (500).json ({ message: 'Failed to get users' })
  })
})

router.get ('/:id', (req, res) => {
  const { id } = req.params

  database['users'].get (id)
  .then (users => {
    const user = users[0]

    if (user) {
      res.json (user)
    } else {
      res.status (404).json ({ message: 'Could not find user with given id.' })
    }
  })
  .catch (err => {
    res.status (500).json ({ message: 'Failed to get user' })
  })
})

router.post ('/', (req, res) => {
  const userData = req.body

  database['users'].push (userData)
  .then (ids => {
    res.status (201).json ({ created: ids[0] })
  })
  .catch (err => {
    res.status (500).json ({ message: 'Failed to create new user' })
  })
})

router.put ('/:id', (req, res) => {
  const { id } = req.params
  const changes = req.body

  database['users'].set (id, changes)
  .then (count => {
    if (count) {
      res.json ({ update: count })
    } else {
      res.status (404).json ({ message: 'Could not find user with given id' })
    }
  })
  .catch (err => {
    res.status (500).json ({ message: 'Failed to update user' })
  })
})

router.delete ('/:id', (req, res) => {
  const { id } = req.params

  database['users'].pull (id)
  .then (count => {
    if (count) {
      res.json ({ removed: count })
    } else {
      res.status (404).json ({ message: 'Could not find user with given id' })
    }
  })
  .catch (err => {
    res.status (500).json ({ message: 'Failed to delete user' })
  })
})

module.exports = router
