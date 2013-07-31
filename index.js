var Transform = require('stream').Transform;
var util = require('util');

util.inherits(DelayedStream, Transform);

function DelayedStream (options) {
  if (!this instanceof DelayedStream) return new DelayedStream(options);
  var options = options || {};
  options.objectMode = Boolean(options.objectMode);
  Transform.call(this, options)
  this.interval = options.interval || 1000;
}

DelayedStream.prototype._transform = function (chunk, encoding, done) {
  var self = this;
  setTimeout(function () {
    self.push(chunk);
    done();
  }, self.interval);
};

module.exports = DelayedStream
