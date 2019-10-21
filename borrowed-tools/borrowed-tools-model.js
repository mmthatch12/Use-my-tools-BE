const db = require('../database/dbConfig')

module.exports = {
    getBtools,
    addBTool,
    deleteBTool
}

function getBtools(id) {
    return db('borrowed_tools as b')
        .join('users as u', 'b.borrower_id', '=', 'u.id')
        .where({ borrower_id: id })
        .join('tools as t', 'b.tool_id', '=', 't.id')
        .select('b.borrower_id', 'u.first_name', 'u.last_name', 'b.tool_id', 't.name', 'b.notes' )
}

function addBTool(body) {
    return db('borrowed_tools as b')
        .join('tools as t', 'b.tool_id', '=', 't.id')
        .insert(body)
}

function deleteBTool(id) {
    return db('borrowed_tools as b')
        .join('tools as t', 'b.tool_id', '=', 't.id')
        .where({ tool_id: id})
        .del()
}