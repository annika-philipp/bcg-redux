
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {id: 1, user_id: 1, score: 80, name: "Player1"},
        {id: 2, user_id: 2, score: 75, name: "Player1"},
        {id: 3, user_id: 3, score: 70, name: "Player1"},
        {id: 4, user_id: 4, score: 65, name: "Player1"},
        {id: 5, user_id: 5, score: 60, name: "Player1"},
        {id: 6, user_id: 6, score: 55, name: "Player1"},
        {id: 7, user_id: 7, score: 50, name: "Player1"},
        {id: 8, user_id: 8, score: 45, name: "Player1"},
        {id: 9, user_id: 9, score: 40, name: "Player1"},
        {id: 10, user_id: 10, score: 35, name: "Player1"},
      ]);
    });
};
