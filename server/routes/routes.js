const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('../db/db')

router.use(bodyParser.json())

router.get('/questions', (req, res) => {
  db.getQuestionsAndAnswers()
    .then(questions => {
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
      res.json(questionsList)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/scores', (req, res) => {
  db.getScores()
    .then(scores => {
      res.json(scores)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/scores', (req, res) => {
  const newScore = req.body
  db.addScore(newScore)
    .then(score => { res.sendStatus(201) }) // sendStatus sets status as 201 and no body in response.
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
