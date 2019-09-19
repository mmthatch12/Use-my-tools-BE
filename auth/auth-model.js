const db = require('../database/dbConfig')

module.exports = {
    find,
    createUser,
    findBy,
    findById

}

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter)
}

async function createUser(user) {
    const [id] = await db('users')
        .insert(user)
        
    return findById(id)
}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

