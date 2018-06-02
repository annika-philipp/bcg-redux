import request from 'supertest'
// import nock from 'nock'


const server = require('../../server/server')

// jest.mock('../../server/db/db', () => ({
//     getQuestionsAndAnswers: jest.fn(),
//     getScores: jest.fn(),
//     addScore: jest.fn()
// }))

// import {getQuestionsAndAnswers, getScores, addScore} from '../../server/db/db'



// test('GET v1 works as well', () => {
//     getQuestionsAndAnswers.mockImplementation(() => 
//         request(server)
//         .get('/api/v1')
//         .expect(200)
//         .then(res => {
//             expect(res.body.length).toBeGreaterThan(0)
//         })
//         .catch(err => {
//             expect(err).toBeFalsy()
//         })
//     )
// })

// test('/v2 returns all scores', () => {
//     const expected = 2

//     getScores.mockImplementation(() => 
//         request(server)
//         .get('/api/v2')
//         .expect('Content-Type', /json/)
//         .expect(200) //203 when adding something
//         .then(res => {
//             expect(res.body.length).toBe(expected)
//         })
//         .catch(err => {
//             expect(err).toBeFalsy()
//         })
//     )
// })

// test('POST /v2 works', () => {
//     addScore.mockImplementation(() => 
//         request(server)
//         .post('/api/v2')
//         .send()
//         .expect(201)
//         .then(res => {
//             expect(res.body).toBeTruthy() //.length when testing on a webpage, on api only when return a body (here object). Truthy to check that anyhing gets returned.
//         })
//         .catch((err, res) => {
//             expect(err).toBeFalsy()
//         })
//     )
// })

// test('POST /v2 works', () => {
//     addScore.mockImplementation(() => 
//         request(server)
//         .post('/api/v2')
//         .send()
//         .expect(500)
//         .catch((err, res) => {
//             expect(err).toBeFalsy()
//         })
//     )
// })


////----* The tests below worked fine until I tried to test for both expect 200 and 500 responses in my POST route. Had to rewrite as above to be able to run all tests. The above example has just request server, not return request(server)

jest.mock('../../server/db/db', () => ({
    getQuestionsAndAnswers: () => Promise.resolve([
        {"question":"First day of bootcamp, you feel...","question_id":1,"answers":["excited!","Bootcamp? I did not sign up for this!"],"scores":[40,-40]},
        {"question":"function getGreeting (name) {","question_id":2,"answers":["return \"Hello\" + name}","return a + b}"],"scores":[10,-10]}
    ]),
    getScores: () => Promise.resolve([
        {"id":1,"user_id":1,"score":80,"name":"Player1"},
        {"id":2,"user_id":2,"score":75,"name":"Player2"} 
    ]),
    addScore: () => Promise.resolve([])
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

  test('POST /v2 works', () => {
    return request(server)
        .post('/api/v2')
        .send()
        .expect(201)
        .then(res => {
            console.log('then', res.body)
            expect(res.body).toBeTruthy() //.length when testing on a webpage, on api only when return a body (here object). Truthy to check that anyhing gets returned.
        })
        .catch((err, res) => {
            expect(err).toBeFalsy()
        })
})

test('POST /v2 works', () => {
    return request(server)
        .post('/api/v2')
        .send()
        .expect(500)
        .catch((err, res) => {
            expect(err).toBeFalsy()
        })
})
