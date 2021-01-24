const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const postService = require('./posts.service')

async function getPosts(req, res) {
    try {
        const posts = await postService.query(req.query)
        res.send(posts)
    } catch (err) {
        logger.error('Cannot get post', err)
        res.status(500).send({ err: 'Failed to get post' })
    }
}

async function deletePost(req, res) {
    try {
        await postService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete post', err)
        res.status(500).send({ err: 'Failed to delete post' })
    }
}


async function addPost(req, res) {
    try {
        var post = req.body
        // post.byUserId = req.session.user._id
        post = await postService.add(post)
        // post.byUser = req.session.user
        // post.aboutUser = await userService.getById(post.aboutUserId)
        res.send(post)

    } catch (err) {
        logger.error('Failed to add post', err)
        res.status(500).send({ err: 'Failed to add post' })
    }
}

module.exports = {
    getPosts: getPosts,
    deletePost,
    addPost: addPost
}