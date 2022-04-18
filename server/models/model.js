const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model('Post', PostSchema);
