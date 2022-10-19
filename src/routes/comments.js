const express = require('express')
const router = express.Router()

const CommentController = require('../controllers/commentController')

router.get('/', CommentController.list)
router.get('/:id', CommentController.listById)
router.post('/', CommentController.createComment)

module.exports = router
