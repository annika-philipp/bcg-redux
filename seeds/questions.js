
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: 'First day of bootcamp, you feel...', week: 1},
        {id: 2, question: 'function getGreeting (name) {', week: 1},
        {id: 3, question: 'Someone says "handlebars" - you think...', week: 2},
        {id: 4, question: 'The 4 most common HTTP methods are...', week: 2},
        {id: 5, question: 'You hear Ming talk about dogs, cats and cows', week: 3},
        {id: 6, question: 'Promises...', week: 3},
        {id: 7, question: 'Where did Ross work before EDA?', week: 4},
        {id: 8, question: 'React...', week: 4},
        {id: 9, question: 'What is a web API?', week: 5},
        {id: 10, question: '...Curry', week: 5},
        {id: 11, question: 'Mix &', week: 6},
        {id: 12, question: 'Redux, one big ... ', week: 6}
      ])
    })
}
