const router = require('express').Router();
const controller = require('../controllers/users');

router.get('/', controller.allUser);
router.post('/new', controller.newUser);

module.exports = {
  users: router
}
