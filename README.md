# node-delay-stream
Use a delay stream in order to synchronously emit data
every x seconds.

## Example
```javascript
var request = require('request');
var DelayStream  = require('delay-stream');
var ds = new DelayStream();

request('http://isaacs.couchone.com/registry/_all_docs').pipe(ds).pipe(process.stdout);
```
Docs should appear every second.

## Install
`npm install delay-stream`

## License
MIT
