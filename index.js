module.exports = Queue

function Queue () {
  var jobs = []

  return {
    add: add
  }

  function add (job, cb) {
    jobs.push(function wrapJob () {
      job(function onJobDone (error, result) {
        if (cb) cb(error, result)
        next()
      })
    })

    if (jobs.length === 1) {
      jobs[0]()
    }
  }

  function next () {
    jobs.shift()
    if (jobs.length) {
      jobs[0]()
    }
  }
}
