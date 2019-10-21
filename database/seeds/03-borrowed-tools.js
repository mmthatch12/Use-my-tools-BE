exports.seed = function(knex) {
  return knex('borrowed_tools').insert([
    {borrower_id: 2, tool_id: 1, notes: 'please return by next week'},
    {borrower_id: 2, tool_id: 2, notes: 'please return by next week'},
    {borrower_id: 1, tool_id: 3, notes: 'please return by next week'},
  ])
};
