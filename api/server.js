const express = require('express')
const cors = require('cors')

const server = express()

const restrict = require('../users/restricted-middleware')

const AuthRouter = require('../auth/auth-router')
const UsersRouter = require('../users/users-router')
const ToolsRouter = require('../tools/tools-router')
const BtoolsRouter = require('../borrowed-tools/borrowed-tools-router')


server.use(express.json())
server.use(cors())

server.use('/auth', AuthRouter)
server.use('/users', restrict, UsersRouter)
server.use('/tools', restrict, ToolsRouter)
server.use('/btools', restrict, BtoolsRouter)

server.get('/', (req, res) => (
    res.send('sanity check')
))

module.exports = server