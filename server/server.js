const path = require('path')
const express = require('express')
const router = require('./routes/routes')
const bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api', router)

module.exports = server

