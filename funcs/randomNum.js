// 随机生成n位随机数
function random6(n) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let res = []
  for (let i = 0; i < n; i++) {
    res.push(arr[Math.floor(Math.random() * arr.length)])
  }
  return res
}

console.log(random6(6))


// 随机生成n位不重复的随机数
function getRandom(n) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let res = []
  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * arr.length)
    res.push(arr[index])
    arr.splice(index, 1)
  }
  return res
}

console.log(getRandom(6))