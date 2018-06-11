const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('../db/db')

router.use(bodyParser.json())

router.get('/questions', (req, res) => {
  db.getQuestionsAndAnswers ()
    .then(questionsList => {
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
