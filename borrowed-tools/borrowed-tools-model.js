const db = require('../database/dbConfig')

module.exports = {
    getBtools
}

function getBtools(id) {
    return db('borrowed_tools as b')
        .join('users as u', 'b.borrower_id', '=', 'u.id')
        .where({ borrower_id: id})
        
}