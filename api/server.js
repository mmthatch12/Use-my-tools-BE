const express = require('express')

const server = express()

const AuthRouter = require('../auth/auth-router')
const UsersRouter = require('../users/users-router')
const ToolsRouter = require('../tools/tools-router')

server.use(express.json())
server.use('/auth', AuthRouter)
server.use('/users', UsersRouter)
server.use('/tools', ToolsRouter)

server.get('/', (req, res) => (
    res.send('sanity check')
))

module.exports = server