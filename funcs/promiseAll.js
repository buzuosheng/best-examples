// promise.all()
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let ps = Array.from(promises)
    let len = ps.length
    let res = []
    let count = 0
    for (let i = 0; i < len; i++) {
      Promise.resolve(ps[i])
        .then(o => {
          res[i] = ps[i]
          if (++count === len) {
            resolve(res)
          }
        })
        .catch(err => reject(err))
    }
  })
}

console.log(promiseAll([1,2,3,4]))