var through2 = require('through2')

module.exports = function (interval, options) {
  var interval = interval || 1000
  var is = through2(options, function (chunk, encoding, done) {
    var self = this;
    setTimeout(function () {
      self.push(chunk);
      done();
    }, interval);
  })
  return is
}
