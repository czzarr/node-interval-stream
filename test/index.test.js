var chai = require('chai');
var through = require('through');
var IntervalStream = require('../');
var is = new IntervalStream();

chai.should();

describe('Interval Stream', function () {
  it('should emit a char every second', function (done) {
    var chunks = [];
    var counter = 0;

    function write (chunk) {
      chunks.push(chunk.toString('utf8'));
    }

    function end () {
      clearInterval(iv);
      done();
    }

    is.pipe(through(write, end));

    is.write('a');
    is.write('b');
    is.write('c');
    is.write('e');
    is.write('f');
    is.end();

    var iv = setInterval(function () {
      chunks.length.should.equal(++counter);
    }, 1000);
  });
});
