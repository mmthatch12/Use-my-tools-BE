const db = require('../database/dbConfig')

module.exports = {
    getBtools,
    addBTool,
    // deleteBTool
}

//get all tools that the user id is currently borrowing
function getBtools(id) {
    return db('borrowed_tools as b')
        .join('users as u', 'b.borrower_id', '=', 'u.id')
        .where({ borrower_id: id })
        .join('tools as t', 'b.tool_id', '=', 't.id')
        .select('b.borrower_id', 'u.first_name', 'u.last_name', 'b.tool_id', 't.name', 'b.notes' )
}

//add tool to borrowed tools list. I think this will need to happen at the same time as 
//the editTool method(will need to change borrowed to true, requested to false and 
//requested by to null)
function addBTool(body) {
    return db('borrowed_tools as b')
        .join('tools as t', 'b.tool_id', '=', 't.id')
        .insert(body)
}

// function deleteBTool(id) {
//     return db('borrowed_tools as b')
//         .join('tools as t', 'b.tool_id', '=', 't.id')
//         .where({ tool_id: id})
//         .del()
// }