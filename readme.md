# queue-that-callback [![Build Status](https://travis-ci.org/ajoslin/queue-that-callback.svg?branch=master)](https://travis-ci.org/ajoslin/queue-that-callback)

> Run a queue of tasks, with classic callbacks to control task completion

## Install

```
$ npm install --save queue-that-callback
```

## Usage

```js
var Queue = require('queue-that-callback')

var queue = Queue()
var results = []

function Job (value) {
  return function run (callback) {
    setTimeout(function () {
      results.push(value)
      callback(null, value)
    }, 100)
  }
}

queue.add(Job(1), (err, value) => assert.equal(results, [1]))
queue.add(Job(2), (err, value) => assert.equal(results, [1, 2]))
queue.add(Job(3), (err, value) => assert.equal(results, [1, 2, 3]))
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
