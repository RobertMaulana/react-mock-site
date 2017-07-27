const express = require('express'),
      router = express.Router(),
      controller = require('../controllers/article-category');

router.get('/', controller.allCategory);
router.post('/new', controller.addCategory);
router.put('/edit/:id', controller.editCategory);
router.delete('/delete/:id', controller.deleteCategory);

module.exports = {
  articleCategory: router
};
