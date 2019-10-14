exports.seed = function(knex) {
  return knex('tools').insert([
    {name: "Hammer", owned_by: , first_name: 'Dennis', last_name: 'Baum', email: 'dbaum@gm.com'},
  ])
};
