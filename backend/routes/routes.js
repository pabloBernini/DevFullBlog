const express = require('express')
const mongoose = require('mongoose')
const PostsDB = require('../schemas/postSchema')

const router = express.Router()

router.get('/', async (req, res) => {

    const posts = await PostsDB.find()

    res.status(200).json(posts)
    
})
router.post('/', async (req, res) => {
    
    const {title, author, body} = req.body
    const post = await PostsDB.create({title, author, body})

    res.status(200).json(post)
    
})
router.delete('/:id', async (req, res) => {

    const { id } = req.params
    const post = await PostsDB.findByIdAndDelete(id)
    if(!post) {
        return res.status(404).json({error: "no such workout"})
    }
    res.status(200).json(post)

    
    
})
router.patch('/', (req, res) => {
    res.json({mssg: "Welcome to the app"})
    
})

module.exports = router