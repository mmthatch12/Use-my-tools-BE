
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
    tbl.integer('owner_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')
  })
  .createTable('borrowed_tools', tbl => {
      tbl.increments()
      tbl.integer('borrower_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('tool_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tools')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('borrowed_tools')
    .dropTableIfExists('tools')
    .dropTableIfExists('users')
};
