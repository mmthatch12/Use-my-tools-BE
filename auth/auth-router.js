const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')
const restricted = require('./restricted-middleware')


const Users = require('./auth-model')

router.post('/register', (req, res) => {
    let user = req.body

    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash

    if(user.username && user.password && user.first_name && user.last_name && user.email){
        Users.createUser(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not add user'})
        })
    } else {
        res.status(400).json({ message: 'Must include username, password, first name, last name and email to register'})
    }
    
})

router.post('/login', (req, res) => {
    let { username, password } = req.body

    Users.findBy({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)
                res.status(200).json({ message: `Welcome ${user.first_name}!`, token})
            } else {
                res.status(401).json({ message: 'You do not have proper authorization'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json(error)
        })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}


module.exports = router