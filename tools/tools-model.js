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