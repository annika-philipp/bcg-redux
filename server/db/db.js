const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getQuestionsAndAnswers,
  getScores,
  addScore
}

function getQuestionsAndAnswers (id, testConn) {
  const conn = testConn || connection
  return conn('questions')
    .join('answers', 'questions.id', 'answers.question_id')
    .select().then(formatQuestions)
}

// .select() returns an array where each question/answer pair is an object, total of 24
// .then(formatQuestions) results in an array where each question is an object that has a nested array each for its two answers and two scores, total of 12

function formatQuestions(questions) {
  let questionsList = []
  for (var i = 0; i < questions.length; i = i + 2) {
    let question = questions[i]
    let nextQuestion = questions[i + 1]
    let q = {
      question: question.question,
      question_id: question.question_id,
      answers: [
        question.answer,
        nextQuestion.answer
      ],
      scores: [
        question.score,
        nextQuestion.score
      ]
    }
    questionsList.push(q)
  }
  return questionsList
}

function getScores (testConn) {
  const conn = testConn || connection
  return conn('scores').select()
}

function addScore (data, testConn) {
  const conn = testConn || connection
  return conn('scores').insert({name: data.name, score: data.score})
}

