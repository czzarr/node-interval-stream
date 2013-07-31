var Transform = require('stream').Transform;
var util = require('util');

util.inherits(IntervalStream, Transform);

function IntervalStream (interval, objectMode) {
  if (!this instanceof IntervalStream) return new IntervalStream(options);
  if (typeof interval === 'boolean') {
    objectMode = interval;
    interval = 1000;
  }
  objectMode = Boolean(objectMode);
  Transform.call(this, { objectMode: objectMode })
  this.interval = interval || 1000;
}

IntervalStream.prototype._transform = function (chunk, encoding, done) {
  var self = this;
  setTimeout(function () {
    self.push(chunk);
    done();
  }, self.interval);
};

module.exports = IntervalStream
