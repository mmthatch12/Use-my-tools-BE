const knex = require('knex')

const knexFile = require('../knexfile')

const knexConfig = knexFile[process.env.NODE_ENV] || 'devolopment'

module.exports = knex(knexConfig)