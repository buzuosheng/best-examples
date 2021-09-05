// 实现一个无限累加的函数
function sum(...args) {
  const f = (...rest) => sum(...args, ...rest)
  f.valueOf = () => args.reduce((a, b) => a + b, 0)
  return f
}

console.log(sum(1, 2, 3).valueOf())
console.log(sum(1)(2).valueOf())
console.log(sum(1)(2,3)(4).valueOf())