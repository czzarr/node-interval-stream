# node-interval-stream
Use an interval stream in order to synchronously emit data
every x seconds.

## Example
```javascript
var request = require('request');
var IntervalStream  = require('interval-stream');
var ds = new DelayStream(2000); // emit every 2 seconds

request('http://isaacs.couchone.com/registry/_all_docs')
  .pipe(ds)
  .pipe(process.stdout);
```
Docs should appear every second.

## Install
`npm install interval-stream`

## License
MIT
