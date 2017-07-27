const db = require('../models/posts');

const allPosts = (req, res) => {
  db.find({}, (err, result) => {
    res.send(result);
  })
}

const newPost = (req, res) => {
  db.create(req.body, (err, result) => {
    res.send(result);
  })
}

const editPost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db.findByIdAndUpdate(id, {
    title, content
  }, {new: true}, (err, result) => {
    res.send(result)
  })
}

const deletePost = (req, res) => {
  const { id } = req.params;
  db.findByIdAndRemove(id, (err, result) => {
    res.send(result)
  })
}

module.exports = {
  allPosts, newPost, editPost, deletePost
}
