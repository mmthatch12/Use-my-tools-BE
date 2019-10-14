exports.seed = function(knex) {
  return knex('borrowed_tools').insert([
    {borrower_id: 2, tool_id: 1},
    {borrower_id: 2, tool_id: 2},
    {borrower_id: 1, tool_id: 3},
  ])
};
