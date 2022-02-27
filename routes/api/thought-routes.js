const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReply,
  removeReply
} = require('../../controllers/thought-controller');


router.route('/:userId').post(addThought);


router
  .route('/:userId/:thoughtId')
  .put(addReaction)
  .delete(removeThought);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;