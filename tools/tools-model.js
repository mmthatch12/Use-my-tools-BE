const db = require('../database/dbConfig')

module.exports = {
    getTools,
    avTools,
    addTool,
    editTool,
    deleteTool
}

function getTools(id) {
    return db('tools as t')
        .join('users as u', 't.owner_id', '=', 'u.id')
        .where({ owner_id: id })
}

function avTools() {
    return db('tools').where({ borrowed: false })
}

function addTool(body) {
    return db('tools').insert(body)
}

function editTool(id, body) {
    return null
}

function deleteTool(id) {
    return null
}