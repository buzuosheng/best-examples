/**
 * 求数组中不相邻的元素和的最大值
 * @param {number[]} nums
 * @return {number}
 * 
 * x=0, f(0) = 0
 * x=1, f(1) = nums[0]
 * x>1, f(x) = max(f(x-2)+nums[x-1], f(x-1))
 */
var rob = function (nums) {
  let len = nums.length
  if (len === 0) return 0
  const dp = new Array(len + 1)
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }
  return dp[len]
};