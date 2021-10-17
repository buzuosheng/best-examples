/**
 * 跳跃游戏
 * 在第i个位置，一步最大跨出step=i+nums[i]的范围，最远可到达step+nums[i]的位置
 * 在i到i+nums中如果有num[j]大于step，则在j处开始跳跃
 * 总是选择最大跨步
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function (nums) {
  if (nums.length === 1) return true
  let step = 0
  for (let i = 0; i <= step; i++) {
      step = Math.max(step, i + nums[i])
      if (step >= nums.length - 1) return true
  }
  return false
};