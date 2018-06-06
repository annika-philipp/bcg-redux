import request from 'supertest'

const server = require('../../server/server')

jest.mock('../../server/db/db', () => ({
  getQuestionsAndAnswers: () => Promise.resolve([
    {'question':'First day of bootcamp, you feel...','question_id':1,'answers':['excited!','Bootcamp? I did not sign up for this!'],'scores':[40,-40]},
    {'question':'function getGreeting (name) {','question_id':2,'answers':['return \'Hello\' + name}','return a + b}'],'scores':[10,-10]}
  ]),
  // getQuestionsAndAnswers: () => Promise.reject([]),

  getScores: () => Promise.resolve([
    {'id': 1, 'user_id': 1, 'score': 80, 'name': 'Player1'},
    {'id': 2, 'user_id': 2, 'score': 75, 'name': 'Player2'}
  ]),
  addScore: (res) => {
    if (res.name) { // if score.name is not null
      return Promise.resolve([])
    }
    return Promise.reject([])
  }
}))

// need return request if testing async
test('GET questions 200 works', () => {
  return request(server)
    .get('/api/questions')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBeGreaterThan(0)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('/scores returns all scores', () => {
  const expected = 2
  return request(server)
    .get('/api/scores')
    .expect('Content-Type', /json/)
    .expect(200) // 203 when adding something
    .then(res => {
      expect(res.body.length).toBe(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('POST /scores 201 works', () => {
  const score = {
    'name': 'Ross'
  }
  return request(server)
    .post('/api/scores')
    .send(score)
    .expect(201)
    .then(res => {
      expect(res.body).toBeTruthy() // .length when testing on a webpage, on api only when return a body (here object). Just truthy to check that something gets returned.
    })
    .catch((err, res) => {
      expect(err).toBeFalsy()
    })
})

test('POST /scores 500 works', () => {
  const score = {
    'name': null
  }
  return request(server)
    .post('/api/scores')
    .send(score) // send in a player score with invalid name to make it a fail condition
    .expect(500)
    .catch((err, res) => {
      expect(err).toBeFalsy()
    })
})
