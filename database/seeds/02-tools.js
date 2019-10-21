exports.seed = function(knex) {
  return knex('tools').insert([
    {name: "Hammer", owner_id: 1, borrowed: true, requested: false},
    {name: "Saw", owner_id: 1, borrowed: true, requested: false},
    {name: "Chainsaw", owner_id: 2, borrowed: true, requested: false},
    {name: "Ladder", owner_id: 3, borrowed: false, requested: false},
    {name: "Firetruck", owner_id: 3, borrowed: false, requested: false},
  ])
};
