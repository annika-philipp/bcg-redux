import request from 'supertest'
import cheerio from 'cheerio'

const server = require('../server/routes/routes')


// jest.mock('../server/db/db', () => ({
//     getScores: () => Promise.resolve([
//         {id: 1, user_id: 1, score: 80, name: "Player1"},
//         {id: 2, user_id: 2, score: 75, name: "Player1"}
//     ]) 
// }))

// test('GET /', () => {
//     return request(routes)
//     .get('/v1')
//     .expect(200)
//     .then((res) => {
//         const $ = cheerio.load(res.text)
//         const firstLineText = $
//     })
// })

test('GET works', (done) => {
    request(routes)
    .get('/api')
    .expect(302)
    .end((err, res) => {
        expect(err).toBeFalsy()
        done()
    })
})