const db = require('../database/dbConfig')

module.exports = {
    createUser,
    loginUser,

}

function createUser(user) {
    return db('users').insert(user)
}