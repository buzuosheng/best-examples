/**
 * 泰波那契数
 * f(0)=0
 * f(1)=1
 * f(2)=1
 * x>2; f(x)= f(x-1) + f(x-2) + f(x-3)
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n < 2) return n
  if (n === 2) return 1
  let o = 0, p = 0, q = 1, r = 1
  for (let i = 3; i <= n; i++) {
    o = p
    p = q
    q = r
    r = o + p + q
  }
  return r
};

n = 25
console.log(tribonacci(n)) //1389537