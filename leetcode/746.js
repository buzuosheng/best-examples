/**
 * 最小花费爬楼梯
 * n阶楼梯，nums[n]表示第n阶台阶需要的体力，
 * 求上完所有的台阶消耗最少的体力
 * f(0) = 0
 * f(1) = num[0]
 * x>2; f(x) = max(f(x-1)+nums[x-2], f(x-2)+nums[x-1])
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let len = cost.length
  let prev = 0, curr = 0
  for (let i = 2; i <= len; i++) {
    next = Math.min(curr + cost[i - 1], prev + cost[i - 2])
    prev = curr
    curr = next
  }
  return curr
};

cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost)) // 6