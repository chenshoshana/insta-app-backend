const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        // const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('posts')
       
        // const reviews = await collection.find(criteria).toArray()
        var posts = await collection.find({}).toArray()
     
        return posts
    } catch (err) {
        // logger.error('cannot find posts', err)
        throw err
    }
}

async function remove(postId) {
    try {
        const store = asyncLocalStorage.getStore()
        // const { userId } = store
        const collection = await dbService.getCollection('posts')
        // remove only if user is owner/admin
        console.log('postId', postId)
        const query = { _id: ObjectId(postId) }
        // if (!isAdmin) query.byUserId = ObjectId(userId)
        await collection.deleteOne(query)
        // return await collection.deleteOne({ _id: ObjectId(reviewId), byUserId: ObjectId(userId) })
    } catch (err) {
        // logger.error(`cannot remove post ${postId}`, err)
        throw err
    }
}


async function add(post) {
    console.log('enter posts.service backend');
    try {
        const collection = await dbService.getCollection('posts')
        const res = await collection.insertOne(post)
        return res.ops[0];
    } catch (err) {
        // logger.error('cannot insert post', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}

module.exports = {
    query,
    remove,
    add
}


