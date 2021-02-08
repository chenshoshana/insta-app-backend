const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { addPost, getPosts, deletePost, editPost } = require('./posts.controller')
const { getById } = require('../user/user.service')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getPosts)
router.post('/', addPost)
router.get('/:id', getById)
// Need to add put request
router.delete('/:id', deletePost)
router.put('/:id', editPost)

module.exports = router