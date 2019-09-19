const router = require('express').Router()
const restrict = require('./restricted-middleware')

const Users = require('./users-model')

router.get('/', restrict, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error: 'Could not load users'})
        })
})



module.exports = router