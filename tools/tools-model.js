const db = require('../database/dbConfig')

module.exports = {
    loanedTools,
    rentedTools,
    addTool,
    editTool,
    deleteTool
}

function loanedTools(id) {
    return db('tools')
}

function rentedTools(id) {
    return null
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