const Post = require('../models/model');

class PostController {
  async findAll(req, res) {
    res.send(await Post.find());
  }

  async addPost(req, res) {
    try {
      const post = await new Post(req.body).save();
      console.log(req.body);
      res.send(post);
    } catch (e) {
      console.log(e);
    }
  }

  async deletePost(req, res) {
    try {
      const post = await Post.findByIdAndRemove(req.params.id);
      res.send(post);
    } catch (e) {
      console.error(e);
    }
  }

  async upVote(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body);
      res.send(post);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new PostController();
