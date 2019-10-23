const db = require('../database/dbConfig')

module.exports = {
    getTools,
    avTools,
    addTool,
    editTool,
    deleteTool,
    reqTools
}

//get all tools owned by owner id
function getTools(id) {
    return db('tools as t')
        .join('users as u', 't.owner_id', '=', 'u.id')
        .where({ owner_id: id })
        .select('t.id', 't.name', 'u.first_name', 'u.last_name', 't.owner_id', 't.requested', 't.borrowed')
}

//get all tools not currently borrowed
function avTools() {
    return db('tools').where({ borrowed: false })
}

//add new tool
function addTool(body) {
    return db('tools')
        .insert(body)
        .returning('id')
        .then(([tool]) => tool)
}

//edit tool by tool id
function editTool(id, body) {
    return db('tools')
        .where('id', id)
        .update(body)
}

//delete tool by tool id
function deleteTool(id) {
    return db('tools')
        .where('id', id)
        .del()
}

//display all tools that owner id owns that are currently requested
function reqTools(id) {
    return db('tools as t')
        .join('users as u', 't.owner_id', '=', 'u.id')
        .where({ owner_id: id, requested: true})
        .select('t.id', 't.owner_id', 't.name', 't.requested', 't.requested_by')
}