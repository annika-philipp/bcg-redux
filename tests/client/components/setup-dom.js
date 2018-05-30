require('babel-register')

const { JSDOM } = require('jsdom')

const dom = new JSDOM('<body></body>')

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator

//creates fake DOM for testing within our node script
//babel-register allows imports and ES6
//new JSDOM has a body that all React code gets put in, then behaves like normal DOM
//React calls upon globals e.g. global.document used when calling on document.getElementById('app') in client/index.js - when testing referes to the fake DOM document
