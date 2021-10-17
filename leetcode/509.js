/**
 * 斐波那契数列
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * @param {number} n
 * @return {number}
 */
var myfib = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n > 1) return fib(n - 1) + fib(n - 2)
};

function fib(n) {
  if (n < 2) return n
  let p = 0, q = 0, r = 1
  for (let i = 2; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}

console.log(fib(10))  //55