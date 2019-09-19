const router = require(express).Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


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

module.exports = router