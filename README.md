# node-interval-stream

 [![Build
Status](https://travis-ci.org/czzarr/node-interval-stream.png)](https://travis-ci.org/czzarr/node-interval-stream)

Use an interval stream in order to synchronously emit data
every x seconds.

## Example
```javascript
var request = require('request');
var is  = require('interval-stream');

request('http://isaacs.couchone.com/registry/_all_docs')
  .pipe(is(2000)) // emit every 2 seconds
  .pipe(process.stdout);
```
Docs should appear every second.

## Install
`npm install interval-stream`

## License
MIT
