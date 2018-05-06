exports.up = function(knex, Promise) {
    return knex.schema.createTable('answers', (table) => {
        table.increments('id').primary()
        table.string('answer')
        table.integer('question_id')
        table.integer('score')
      })
    }

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('answers')
};

//to create this file: yarn knex migrate:make answers
// to update database to include any changes in here yarn knex migrate:latest.