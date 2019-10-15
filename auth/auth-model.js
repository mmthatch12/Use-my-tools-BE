const db = require('../database/dbConfig')

module.exports = {
    createUser,
    findBy,
    findById

}

function findBy(filter) {
    return db('users').where(filter).select('id', 'first_name', 'password')
}

async function createUser(user) {
    const [id] = await db('users')
        .insert(user)
        .returning('id')
        
    return findById(id)
}

function findById(id) {
    return db('users')
        .where({ id })
        .first()
}

