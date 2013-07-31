var chai = require('chai');
var through = require('through');
var DelayedStream = require('../');
var ds = new DelayedStream();

chai.should();

describe('Delay Stream', function () {
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

    ds.pipe(through(write, end));

    ds.write('a');
    ds.write('b');
    ds.write('c');
    ds.write('e');
    ds.write('f');
    ds.end();

    var iv = setInterval(function () {
      chunks.length.should.equal(++counter);
    }, 1000);
  });
});
