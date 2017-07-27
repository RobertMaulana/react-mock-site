const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  createdAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
  title: String,
  content: String,
  author: {type: String, default: 'Maulana'}
});

module.exports = mongoose.model('Post', postSchema);
