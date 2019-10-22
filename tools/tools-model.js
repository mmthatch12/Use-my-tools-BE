const db = require('../database/dbConfig')

module.exports = {
    getTools,
    avTools,
    addTool,
    editTool,
    deleteTool,
    reqTools
}

function getTools(id) {
    return db('tools as t')
        .join('users as u', 't.owner_id', '=', 'u.id')
        .where({ owner_id: id })
        .select('t.id', 't.name', 'u.first_name', 'u.last_name', 't.owner_id')
}

function avTools() {
    return db('tools').where({ borrowed: false })
}

function addTool(body) {
    return db('tools')
        .insert(body)
        .then(([tool]) => tool)
}

function editTool(id, body) {
    return db('tools')
        .where({ id })
        .update(body)

}

function deleteTool(id) {
    return db('tools')
        .where({ id })
        .del()
}

//this still need some selection work
function reqTools(id) {
    return db('tools as t')
        .join('users as u', 't.owner_id', '=', 'u.id')
        .where({ owner_id: id, requested: true})
        .select('t.id', 't.owner_id', 't.name')
}