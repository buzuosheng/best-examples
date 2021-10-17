/**
 * 二分查找
 * x<target覆盖右边界，x>target覆盖做边界
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target === nums[mid]) return mid
    target < nums[mid] ? right = mid - 1 : left = mid + 1
  }

  return -1
};


nums = [-1, 0, 3, 5, 9, 12], target = 9

console.log(search(nums, target))  // 4