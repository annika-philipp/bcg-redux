import request from 'supertest'

const server = require('../../server/server')



////----* The tests below work fine until I triy to test for both expect 200 and 500 responses in my POST route.

jest.mock('../../server/db/db', () => ({
    getQuestionsAndAnswers: () => Promise.resolve([
        {"question":"First day of bootcamp, you feel...","question_id":1,"answers":["excited!","Bootcamp? I did not sign up for this!"],"scores":[40,-40]},
        {"question":"function getGreeting (name) {","question_id":2,"answers":["return \"Hello\" + name}","return a + b}"],"scores":[10,-10]}
    ]),
    getScores: () => Promise.resolve([
        {"id":1,"user_id":1,"score":80,"name":"Player1"},
        {"id":2,"user_id":2,"score":75,"name":"Player2"} 
    ]),
    addScore: () => Promise.resolve([]),
    // addScore: () => Promise.reject([])
}))

//need return request if testing async
test('GET v1 works', () => {
    return request(server)
    .get('/api/v1')
    .expect(200)
    .then(res => {
        expect(res.body.length).toBeGreaterThan(0)
      })
    .catch(err => {
        expect(err).toBeFalsy()
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

  test('POST /v2 201 works', () => {
    return request(server)
        .post('/api/v2')
        .send()
        .expect(201)
        .then(res => {
            console.log('then', res.body)
            expect(res.body).toBeTruthy() //.length when testing on a webpage, on api only when return a body (here object). Just truthy to check that something gets returned.
        })
        .catch((err, res) => {
            expect(err).toBeFalsy()
        })
})

//this test fails as current response is 201 (as above), Promise.resolve in jest.mock - will pass if using Promise.reject - which then fails above test
test('POST /v2 500 works', () => {
    return request(server)
        .post('/api/v2')
        .send()
        .expect(500)
        .catch((err, res) => {
            expect(err).toBeFalsy()
        })
})


