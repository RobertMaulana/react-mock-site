const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  createdAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
  img: {type: String, default: 'http://www.gramfeed.com/icon_users.svg'},
  title: String,
  content: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Post', postSchema);
