
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments()

    tbl.string('username', 128).unique().notNullable()
    tbl.string('password', 128).notNullable()
    tbl.string('first_name', 128).notNullable()
    tbl.string('last_name', 128).notNullable()
    tbl.string('email', 128).notNullable()
  })
  .createTable('tools', tbl => {
    tbl.increments()

    tbl.string('name', 128).notNullable()
    tbl.integer('owned_by').notNullable()
    tbl.integer('borrowed_by')
  })
  .createTable('user_tools', tbl => {
      tbl.increments()
  })
};

exports.down = function(knex) {
  
};
