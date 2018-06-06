exports.up = function (knex, Promise) {
  return knex.schema.createTable('scores', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.integer('score')
    table.string('name')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('scores')
}
