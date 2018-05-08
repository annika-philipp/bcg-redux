import request from 'supertest'

const server = require('../../server/server')


jest.mock('../../server/db/db', () => ({
    getQuestionsAndAnswers: () => Promise.resolve([
        {"question":"First day of bootcamp, you feel...","question_id":1,"answers":["excited!","Bootcamp? I did not sign up for this!"],"scores":[40,-40]},
        {"question":"function getGreeting (name) {","question_id":2,"answers":["return \"Hello\" + name}","return a + b}"],"scores":[10,-10]}
    ]),
    getScores: () => Promise.resolve([
        {"id":1,"user_id":1,"score":80,"name":"Player1"},
        {"id":2,"user_id":2,"score":75,"name":"Player2"} 
    ])
}))


test('GET v1 works', (done) => {
    request(server)
    .get('/api/v1')
    .expect(200)
    .end((err, res) => {
        expect(err).toBeFalsy()
        done()
    })
})

test('/v2 returns all scores', () => {
    const expected = 2
    return request(server)
      .get('/api/v2')
      .expect('Content-Type', /json/)
      .expect(200) //203 when adding something
      .then(res => {
        expect(res.body.length).toBe(expected)
      })
      .catch(err => {
        expect(err).toBeFalsy()
      })
  })