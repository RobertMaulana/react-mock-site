const db = require('../models/user');

const allUser = (req, res) => {
  db.find({}, (err, result) => {
    res.send(result)
  })
}
const newUser = (req, res) => {
  db.create(req.body, (err, result) => {
    if (!err) {
      res.send(result)
    }
  })
}

module.exports = {
  allUser, newUser
}
