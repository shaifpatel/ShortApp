const express = require('express')
const { createhashtags, getHashtag, getallhashtag } = require('../controller/hashtagcontroller')
const auth = require('../middleware/auth')
const hashtagRouter = express.Router()

hashtagRouter.post('/', auth, createhashtags)
hashtagRouter.get('/', auth, getHashtag)
hashtagRouter.get('/allhastag', getallhashtag)

module.exports = hashtagRouter