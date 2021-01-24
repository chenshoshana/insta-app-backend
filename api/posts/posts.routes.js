const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {log} = require('../../middlewares/logger.middleware')
const { addPost, getPosts, deletePost} = require('./posts.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getPosts)
router.post('/',  requireAuth, addPost)
router.delete('/:id',  requireAuth, deletePost)

module.exports = router