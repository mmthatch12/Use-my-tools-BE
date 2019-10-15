const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  return knex('users').insert([
    {username: "dennis", password: bcrypt.hashSync('dennis', 1), first_name: 'Dennis', last_name: 'Baum', email: 'dbaum@gm.com'},
    {username: "sebe", password: bcrypt.hashSync('sebe', 1), first_name: 'Sebe', last_name: 'Bastian', email: 'sebe@gm.com'},
  ])
};
