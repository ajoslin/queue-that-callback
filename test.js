const test = require('tape')
const Queue = require('./')

test('queue', function (t) {
  t.plan(6)

  function Job (result) {
    return function (done) {
      setTimeout(() => {
        results.push(result)
        done(null, result)
      }, Math.random() * 100)
    }
  }

  const queue = Queue()
  const results = []

  queue.add(Job('1'), (err, result) => {
    t.ifError(err)
    t.deepEqual(results, ['1'])
  })

  queue.add(Job('2'), (err, result) => {
    t.ifError(err)
    t.deepEqual(results, ['1', '2'])
  })

  queue.add(Job('3'), (err, result) => {
    t.ifError(err)
    t.deepEqual(results, ['1', '2', '3'])
  })
})
