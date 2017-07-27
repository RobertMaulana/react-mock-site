const db = require('../models/article-category');

const allCategory = (req, res) => {
  db.find({}, (err, result) => {
    res.send(result);
  })
}

const addCategory = (req, res) => {
  db.create(req.body, (err, result) => {
    res.send(result);
  })
}

const editCategory = (req, res) => {

  const { id } = req.params;
  const { category_name } = req.body;

  db.findByIdAndUpdate(id, { category_name }, {new: true}, (err, result) => {
    res.send(result);
  })

}

const deleteCategory = (req, res) => {
  const { id } = req.params;

  db.findByIdAndRemove(id, (err, result) => {
    res.send(result);
  })
  
}

module.exports = {
  allCategory, addCategory, editCategory, deleteCategory
}
