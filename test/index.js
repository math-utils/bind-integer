
var assert = require('assert')

var bind = require('..')

assert.equal(0, bind(null))
assert.equal(0, bind('asdf'))
assert.equal(1, bind(100, -100, 1))
assert.equal(5, bind('asdf', null, null, 5))
assert.equal(25, bind(null, 1, 100, 25))
assert.equal(1, bind(-100, 1, 100))
assert.equal(100, bind(Infinity, 1, 100))
assert.equal(5, bind(5.123))
