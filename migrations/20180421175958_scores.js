exports.up = function (knex, Promise) {
  return knex.schema.createTable('scores', (table) => {
    table.integer('score')
    table.string('name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('scores')
}
