
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {score: 80, name: 'Player1'},
        {score: 75, name: 'Player1'},
        {score: 70, name: 'Player1'},
        {score: 65, name: 'Player1'},
        {score: 60, name: 'Player1'},
        {score: 55, name: 'Player1'},
        {score: 50, name: 'Player1'},
        {score: 45, name: 'Player1'},
        {score: 40, name: 'Player1'},
        {score: 35, name: 'Player1'}
      ])
    })
}
