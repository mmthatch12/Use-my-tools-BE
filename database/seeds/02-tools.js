exports.seed = function(knex) {
  return knex('tools').insert([
    {name: "Hammer", owner_id: 1},
    {name: "Saw", owner_id: 1},
    {name: "Chainsaw", owner_id: 2},
  ])
};
