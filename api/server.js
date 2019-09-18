const express = require('express')

const server = express()

const AuthRouter = require('../auth/auth-router')

server.use(express.json())
server.use('/auth', AuthRouter)

server.get('/', (req, res) => (
    res.send('sanity check')
))

module.exports = server