exports.seed = function(knex) {
  return knex('tools').insert([
    {name: "Hammer", owner_id: 1, borrowed: true},
    {name: "Saw", owner_id: 1, borrowed: true},
    {name: "Chainsaw", owner_id: 2, borrowed: true},
  ])
};
