const express = require('express')
const server = require('../server')
const bodyParser = require('body-parser')
const router = express.Router()
const db = require('../db/db')


router.use(bodyParser.json())

router.get('/v1', (req, res) => {
    db.getQuestionsAndAnswers()
    .then(questions => {
        // console.log("questions ", questions)
        let questionsList = []
        for(var i = 0; i < questions.length; i=i+2) {
            let question = questions[i]
            let nextQuestion = questions[i+1]
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

router.get('/v2', (req, res) => {
    db.getScores()
    .then(scores => {
        // console.log("Scores, ", scores)
        res.json(scores)
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/v2', (req, res) => {
    const newScore = req.body
    db.addScore(newScore)
    .then(scoreIds => {
        res.json({scoreIds: {id:scoreIds[0]}}) //what the what is going on here?
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router