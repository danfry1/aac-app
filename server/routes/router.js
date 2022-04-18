const Express = require('express');
const router = Express.Router();

const PostController = require('../controllers/controller');

router.get('/', PostController.findAll);
router.post('/', PostController.addPost);
router.delete('/:id', PostController.deletePost);
router.put('/:id', PostController.upVote);

module.exports = router;
