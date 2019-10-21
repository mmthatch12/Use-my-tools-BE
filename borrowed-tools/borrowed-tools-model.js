const db = require('../database/dbConfig')

module.exports = {
    getBtools,
    editBTool
}

function getBtools(id) {
    return db('borrowed_tools as b')
        .join('users as u', 'b.borrower_id', '=', 'u.id')
        .where({ borrower_id: id })
        .join('tools as t', 'b.tool_id', '=', 't.id')
        .select('b.borrower_id', 'u.first_name', 'u.last_name', 'b.tool_id', 't.name' )
}

function editBTool(id, body) {
    return db('borrowed_tools')
        .where()
}