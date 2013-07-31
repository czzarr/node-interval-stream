# node-delay-stream
Pipe a stream into a delay stream in order to synchronously emit data
every x seconds.

## Example
```javascript
var request = require('request');
var DelayStream  = require('delay-stream');
var ds = new DelayStream(1000);

request('http://isaacs.couchone.com/registry/_all_docs').pipe(ds).pipe(process.stdout);
```
Docs should appear every second.

## Install
`npm install delay-stream`

## License
MIT
