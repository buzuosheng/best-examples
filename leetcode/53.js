/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let temp = 0
  // max的初始值表示当数组只有一个元素时的最大子数组和
  let sum = nums[0]
  nums.forEach(x => {
    // 如果以x之前一个元素结尾的数组和是负数，舍弃之前的结果，从x开始重新找子数组
    // prev表示以某个元素结尾的数组的最大子数组和
    temp = Math.max(temp + x, x)
    sum = Math.max(temp, sum)
  })
  return sum
};