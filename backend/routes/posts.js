const router = require('express').Router();
const controller = require('../controllers/posts')

router.get('/', controller.allPosts);
router.post('/new', controller.newPost);
router.put('/edit/:id', controller.editPost);
router.delete('/delete/:id', controller.deletePost);

module.exports = {
  posts: router
}
