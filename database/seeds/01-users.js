
exports.seed = function(knex) {
  return knex('users').insert([
    {username: "dennis", password: 'dennis', first_name: 'Dennis', last_name: 'Baum', email: 'dbaum@gm.com'},
    {username: "sebe", password: 'sebe', first_name: 'Sebe', last_name: 'Bastian', email: 'sebe@gm.com'},
  ])
};
