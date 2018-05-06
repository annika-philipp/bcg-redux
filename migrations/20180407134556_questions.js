
exports.up = function(knex, Promise) {
    return knex.schema.createTable('questions', (table) => {
        table.increments('id').primary()
        table.string('question')
        table.integer('week')
      })
    }

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('questions')
};
