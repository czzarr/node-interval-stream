var chai = require('chai')
var through2 = require('through2')
var is = require('../')()

chai.should()

describe('Interval Stream', function () {
  it('should emit a char every second', function (done) {
    var chunks = []
    var counter = 0

    function transform (chunk, encoding, done) {
      chunks.push(chunk.toString('utf8'))
      done()
    }

    function flush () {
      clearInterval(iv)
      done();
    }

    is.pipe(through2(transform, flush))

    is.write('a')
    is.write('b')
    is.write('c')
    is.write('e')
    is.write('f')
    is.end()

    var iv = setInterval(function () {
      chunks.length.should.equal(++counter)
    }, 1000)
  })
})

