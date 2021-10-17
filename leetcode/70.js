/**
 * n阶楼梯需要多少种上法，每次上1阶或2阶
 * 
 * f(0) = 0
 * f(1) = 1
 * f(2) = 2
 * f(3) = 3
 * f(4) = 5
 * ...
 * x>3, f(x) = f(x-1) + f(x-2)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 3) return n
  let p = 0, q = 1, r = 2
  for (let i = 3; i <= n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
};

console.log(climbStairs(2)) //2