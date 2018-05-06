const path = require('path')
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
    .select()
}


function getScores (testConn) {
    const conn = testConn || connection
    return conn('scores').select()
}

function addScore (data, testConn) {
    const conn = testConn || connection
    return conn('scores').insert({name: data.name, score: data.score})
}

